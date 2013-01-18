<?php

require_once 'Map/LatLng.php';
require_once 'Map/Point.php';


/**
 * This class manage a Pam Map which is an image in the background on which we trace stroke and point.
 * This class manage the conversion between pixels and latitude and longitude.
 */
class Pam_Map {
    /**
     * Width of the map with maximum of precision (zoom 21)
     */
    const OFFSET = 268435456;

    /**
     * circumference of the earth
     */
    const OFFSETMETER = 20037508.34;

    /**
     * width of the map
     * @var integer
     */
    protected $width = 500;

    /**
     * height of the height
     * @var integer
     */
    protected $height = 500;

    /**
     * bounds of the map "Lng0, Lat1, Lng1, Lat0"
     * @var string
     */
    protected $bounds = "";

    /**
     * position of the map with center top left of the world
     * @var integer
     */
    public $mapX = 0;
    public $mapY = 0;

    /**
     * array of all elements on Map
     */
    protected $_elements = array();

    /**
     *
     * @param integer $width
     * @param integer $height
     * @param string $bounds
     */
    public function __construct($width, $height, $bounds) {
        $this->height = $height;
        $this->width = $width;
        $this->bounds = $bounds;

        $this->initBounds($this->bounds);
    }

    /**
     *
     * @var Pam_Map_LatLng LAtLng of one point of the bounds
     */
    protected $latLng0 = null;

    /**
     *
     * @var Pam_Map_LatLng LAtLng of one point of the bounds
     */
    protected $latLng1 = null;

    /**
     *
     * @var Pam_Map_Point Point of one point of the bounds
     */
    protected $point0 = null;

    /**
     *
     * @var Pam_Map_Point Point of one point of the bounds
     */
    protected $point1 = null;

    /**
     * ration of the map
     * @var type
     */
    protected $ratio = 0;

    /**
     * offset of the map horizontally: we ask for a width and a height for the map which doesnt correspond to the ratio of the bounds.
     * We need to center the bounds into the size asked.
     * @var integer
     */
    public $offsetX = 0;

    /**
     * offset of the map vertically
     * @var integer
     */
    public $offsetY = 0;

    /**
     * initialize the map with the bounds
     * @param string $bounds
     */
    protected function initBounds($bounds) {
        $bounds_ =  explode(",", $bounds);
        if (count($bounds_) != 4) {
            throw new RuntimeException("bounds are not well formated:".$bounds);
        }
        $this->latLng0 = new Pam_Map_LatLng($bounds_[3], $bounds_[0]);
        $this->latLng1 = new Pam_Map_LatLng($bounds_[1], $bounds_[2]);

        $this->point0 = new Pam_Map_Point($this->_getGlobalXFromLatLng($this->latLng0),
                                $this->_getGlobalYFromLatLng($this->latLng0));
        $this->point1 = new Pam_Map_Point($this->_getGlobalXFromLatLng($this->latLng1),
                                $this->_getGlobalYFromLatLng($this->latLng1));

        $dMap = ($this->point1->x - $this->point0->x) / ($this->point0->y - $this->point1->y);

        $dDiv = $this->width / $this->height;

        if (abs($dDiv) > abs($dMap)) {
            $this->ratio = abs($this->height / ($this->point0->y - $this->point1->y));
            $this->offsetY = 0;
            $this->offsetX = intval(($this->width - $this->ratio * abs($this->point1->x - $this->point0->x))/2);
        } else {
            $this->ratio = abs($this->width / ($this->point1->x - $this->point0->x));
            $this->offsetX = 0;
            $this->offsetY = intval(($this->height - $this->ratio * abs($this->point0->y - $this->point1->y)) / 2);
        }

        $this->_setMapPosition();
    }

    /**
     * return radius fo the earth
     * @return type
     */
    protected function getRadius() {
        return self::OFFSET / pi();;
    }

    /**
     * return radius fo the earth
     * @return type
     */
    protected function getMeterRatio() {
        return self::OFFSET ;
    }

    /**
     * return a Point (in pixel) from LatLng
     * @param Pam_Map_LatLng $latLng
     * @return Pam_Map_Point
     * @throws Exception
     */
    public function getPointFromLatLong($latLng) {

        if ($latLng instanceof Pam_Map_LatLng) {
            return new Pam_Map_Point($this->_getXFromLatLng($latLng), $this->_getYFromLatLng($latLng));
        } else {
            throw new Exception("Parameter should be a Pam_Map_Point");
        }

    }

    /**
     *
     * @param Pam_Map_LatLng $latLng
     * @return integer
     */
    protected function _getXFromLatLng($latLng) {
        $_globalx = $this->_getGlobalXfromLatLng($latLng);
        return intval( $_globalx * $this->ratio - $this->mapX + $this->offsetX );
    }

    /**
     *
     * @param Pam_Map_LatLng $latLng
     * @return integer
     */
    protected function _getGlobalXFromLatLng($latLng) {
        return intval( self::OFFSET + $this->getRadius() * $latLng->lng * pi() / 180 );
    }

    /**
     *
     * @param Pam_Map_LatLng $latLng
     * @return integer
     */
    protected function _getYFromLatLng($latLng) {
        $_globaly = $this->_getGlobalYfromLatLng($latLng);
        return intval( $_globaly * $this->ratio - $this->mapY + $this->offsetY );
    }

    /**
     *
     * @param Pam_Map_LatLng $latLng
     * @return integer
     */
    protected function _getGlobalYFromLatLng($latLng) {
        return intval ( self::OFFSET-$this->getRadius() * log((1+sin($latLng->lat* pi() / 180 ))/( 1 - sin($latLng->lat * pi() / 180 ))) / 2 );
    }

    protected function _getLatFromGlobalX($x) {
        return ((($x)-$this::OFFSET) / $this->getRadius() ) * 180/ pi();
    }

    protected function _getLngFromGlobalY($y) {
        return (pi()/2-2*atan(exp(( ($y) - self::OFFSET) / $this->getRadius() ))) * 180 / pi();
    }

    protected function getLatLngFromPoint($point) {
        $_globalX = ($point->x - $this->offsetX) / $this->ratio + $this->point0->x;
        $_globalY = ($point->y - $this->offsetY) / $this->ratio + $this->point0->y;
        return new Pam_Map_LatLng($this->_getLatFromGlobalX($_globalX), $this->_getLngFromGlobalY($_globalY));
    }

    protected function _setMapPosition() {
        $this->mapX = $this->point0->x * $this->ratio;
        $this->mapY = $this->point0->y * $this->ratio;
    }

    /**
     * this function returns the command to create the map with tilemill.
     * @todo add a parameter if tilemill is installed in the server so that we can execute directly the command
     * @param string $project the tilemill project to use
     * @param string $exportDir the directory where to pur created map
     * @param string $execDir the directory where is index.js file to execute Tilemill.
     * @param string $mapName name of the file created
     * @return string the command
     */
    public function getTileMillCommandToCreateMap($project, $exportDir, $mapName = "", $execDir = "/Applications/TileMill.app/Contents/Resources/", $projectsDir = '/home/Pam/mapbox2/') {

        // Initialize the MapName if not specified
        if ($mapName == "") {
            $mapName = rand(1, 1000000).'_'.$this->width.'_'.$this->height.'.png';
        }

        return "
        ".$execDir.'./index.js export --format=png --bbox='.$this->bounds.' --height='.$this->height.' --width='.$this->width.' --files='.$projectsDir.' '.$project.' '.$exportDir.$mapName.' ';
    }

    /**
     *
     * @param string $cssFile
     * @param array $params
     * @return string
     */
    public function getCommandToChangeCssMapFile($cssFile, $params) {
        $ret = "";

        foreach ($params as $key => $value) {
            $ret .= "sed -i \"s/".$key."='[A-Z]*'/".$key."='".$value."'/g\" ". $cssFile ."\n";
        }

        return $ret;

    }

    /**
     * @param string $cssFile the filename with its fullpath to modify
     * @param array $params an array of pattern/replacements (directly injected into preg_replace)
     * @return boolean
     */
    public function modifyCssFileUsingProvidedPatterns($cssFile, $params) {
        if (is_readable($cssFile) && is_writable($cssFile)) {
            $file = file_get_contents($cssFile);
            $lines = explode("\n", $file);

            $output = array();

            $patterns = array_keys($params);
            $replacements = array_values($params);

            foreach($lines as $line) {
                $output[] = preg_replace($patterns, $replacements, $line);
            }

            $res = file_put_contents($cssFile, implode("\n", $output));

            return $res;
        }
        else {
            throw new RuntimeException("Can't modify style file !");
        }
    }

    /**
     * @param Pam_MapElement
     * @return string
     */
    public function getSVGFromGeom($mapElement) {
        setlocale(LC_NUMERIC, "en_US");
        $latLng0 = $this->getLatLngFromPoint(new Pam_Map_Point($this->width, 0));
        $latLng1 = $this->getLatLngFromPoint(new Pam_Map_Point(0, $this->height));
        // Get the scale
        $ratio = str_replace(',', '.',sprintf('%.16f', $this->ratio/self::OFFSETMETER*self::OFFSET));
        /*
        return "

SELECT getsvg3(geom, 0.0000649554785964, 1, 100, '".
                $latLng1->lat." ".$latLng0->lng.",".$latLng0->lat." ".$latLng0->lng.",".$latLng0->lat." ".$latLng1->lng.",".$latLng1->lat." ".$latLng1->lng.",".$latLng1->lat." ".$latLng0->lng.
                "') FROM ".$sql;

        */
        return $this->mapX.",".$this->mapY."

            SELECT st_asSVG(
            st_simplify(
            st_scale(
            st_translate(
            St_Intersection(
            ST_Transform(ST_SetSRID(ST_GeomFromText('POLYGON((".$latLng1->lat." ".$latLng0->lng.",".$latLng0->lat." ".$latLng0->lng.",".$latLng0->lat." ".$latLng1->lng.",".$latLng1->lat." ".$latLng1->lng.",".$latLng1->lat." ".$latLng0->lng."))'), 4326), 3857),
            (SELECT st_union(geom) FROM geo.continentboundaries))
            , ".self::OFFSETMETER.", -".self::OFFSETMETER.")
            , ".$ratio.",".$ratio.")
            , 1)
            , 0, 0)

        ";
    }

    protected function getMeterFromGlobal($global) {
        return $global*20037508.72/self::OFFSET;
    }

    protected function getRationMeter() {
        return 20037508.72/self::OFFSET;
    }

    public function getRatio() {
        $ratio = $this->ratio/self::OFFSETMETER*self::OFFSET;
        return $this->ratio/self::OFFSETMETER*self::OFFSET;
    }

    public function getPixelBounds($bounds) {
        $bounds_ =  explode(",", $bounds);
        $latLng0 = new Pam_Map_LatLng($bounds_[3], $bounds_[0]);
        $latLng1 = new Pam_Map_LatLng($bounds_[1], $bounds_[2]);

        $point0 = $this->getPointFromLatLong($latLng0);
        $point1 = $this->getPointFromLatLong($latLng1);

        $width = abs($point1->x - $point0->x);
        $height = abs($point1->y - $point0->y);

        $dMap = $height / $width;
        $dDiv = $this->height / $this->width;

        if (abs($dDiv) < abs($dMap)) {
            $ratio = abs($this->height / $height);
            $offsetY = 0;
            $offsetX = intval((- $width + $this->width / $ratio)/2);
        } else {
            $ratio = abs($this->width / $width);
            $offsetX = 0;
            $offsetY = intval((- $height + $this->height /$ratio) / 2);
        }

        $x0 = $point0->x - $offsetX;
        $y0 = $point0->y - $offsetY;
        $x1 = $point1->x + $offsetX;
        $y1 = $point1->y + $offsetY;




        return array($x0, $y0, $x1 - $x0, $y1 - $y0);
    }

    public function getBounds() {
        $latLng1 = $this->getLatLngFromPoint(new Pam_Map_Point($this->width, 0));
        $latLng0 = $this->getLatLngFromPoint(new Pam_Map_Point(0, $this->height));

        return $latLng0->lng.",".$latLng1->lat.",".$latLng1->lng.",".$latLng0->lat;
    }

    public function getPolygon() {
        $bounds =  explode(",", $this->bounds);
        return 'POLYGON(('.$bounds[0].' '.$bounds[3].','.$bounds[2].' '.$bounds[3].','.$bounds[2].' '.$bounds[1].','.$bounds[0].' '.$bounds[1].','.$bounds[0].' '.$bounds[3].'))';
    }

    public function toArray() {

        // Get elements
        $elements = array();

        foreach ($this->_elements as $element) {
            $elements[] = $element->toArray();
        }

        return array(
            "width" => $this->width,
            "height" => $this->height,
            "decorators" => array("Pam.Map.SmallMap","Pam.Map.Tooltip"),
            "map" => array("bounds" => $this->bounds),
            "tooltip" => array("class" => "tooltip", "show" => "true"),
            "classes" => array(
                "over" => array(
                    "stroke" => "#EC5124",
                    "stroke-width" =>  1.5,
                    "stroke-opacity" => 0.6,
                    "stroke-linejoin" =>  "round",
                    "stroke-linecap" => "round",
                    "fill" =>  "#FFFFFF",
                    "opacity" =>  1
                )
            ),
            "elements" => $elements
        );
    }

    public function addElements($elements) {
        //@todo add type checking
        $this->_elements = array_merge($this->_elements, $elements);
    }

    public function addElement($element) {
        //@todo add type checking
        $this->_elements[] = $element;
    }
}