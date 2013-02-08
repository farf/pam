<?php

require_once 'Evaneos/Map.php';

class Developper_MapController extends BaseController {

    public function init() {

        parent::init();

         $this->_userIsAllowed(Evaneos_Access::ROLE_ADMIN | Evaneos_Access::ROLE_DEVELOPPER, BASE_URL, BASE_URL);
    }

    public function indexAction() {


    }

    public function initboundsAction() {
        // Get countries
        $cm = $this->managerFactory->getInstanceCountry();
        $this->view->countries = $this->view->countries = $cm->getAll();
        $_countryId = intval($this->_request->getParam('country_id', 0));

        if($_countryId == 0) {
            $country = $cm->getFirstCountryWithoutBounds();
        } else {
            $country = $cm->getById($_countryId);
        }

        if ($_countryId != null) $this->view->country = $country;

        if ($this->_request->isPost()) {
            $country->bounds = $this->_request->getParam('bounds', '');

            $cm->save($country);

            $this->view->message = 'bounds saved';

            $country = $cm->getFirstCountryWithoutBounds();
        }
        //$country->bounds = "-70.0661311509869, 12.6141140812639,-69.8956764390721,12.4230146346487";

        // format bounds
        if ($country->bounds != '' && $country->bounds != null) {
            $_explode = explode(",", $country->bounds);
            $this->view->lat1 = $_explode[1];
            $this->view->lng1 = $_explode[0];
            $this->view->lat2 = $_explode[3];
            $this->view->lng2 = $_explode[2];
        } else {
            $this->view->lat1 = $country->latitude -1;
            $this->view->lng1 = $country->longitude -1;
            $this->view->lat2 = $country->latitude + 1;
            $this->view->lng2 = $country->longitude + 1;
        }

        $this->view->country = $country;

    }

    public function createshellscriptAction() {

        // Get param
        $_width = $this->_request->getParam('width', 740);
        $_height = $this->_request->getParam('height', 540);
        $project = $this->_request->getParam('project', "Betty_Map");

        // Get countries
        $cm = $this->managerFactory->getInstanceCountry();
        $countries = $this->view->countries = $cm->getAll();

        // Directories
        $exportExecDir = "/Applications/TileMill.app/Contents/Resources/";
        $styleCssFile = "/Users/yvanwibaux/'Google Drive'/Yvan/MapBox/project/".strtolower($project)."/style.mss";
        $mapFilesDir = "/Users/yvanwibaux/Documents/workspace/yvan-evaneos/app/modules/developper/assets/map/countrymap/";
        $mapurlDir = "http://yvan.evaneos.dev/images/countrymap/";

        // Let's save the exec
        $execs = array();
        $urls = array();
        $previousIso3 = "FRA";

        // Let's create the map
        foreach ($countries as $country) {
            $mapFileName = $country->iso2.'_'.$country->id.'_'.$_width.'_'.$_height.'.png';

            if ($country->bounds != '' && $country->bounds != null) {

                $_map = new Evaneos_Map($_width, $_height, $country->bounds);

                $execs[$country->id] = $_map->getCommandToChangeCssMapFile($styleCssFile, array("adm0_a3"=>$country->iso3, "'country code'"=> $country->iso2));

                $execs[$country->id] .= $_map->getTileMillCommandToCreateMap($project, $mapFilesDir, $mapFileName);

                $urls[$country->id] = $mapurlDir.$mapFileName;
                $previousIso3 = $country->iso3;
            //exec('/Applications/TileMill.app/Contents/Resources/./index.js export --format=png --bbox=-18.166667,27.633333,4.333333,43.916667 world /Users/yvanwibaux/Downloads/export45.png');
            } else {
                $execs[$country->id] = '';
            }
        }

        $this->view->execs = $execs;
        $this->view->urls = $urls;
    }

    public function tracerouteonmapAction() {
        $this->_helper->layout->disableLayout();

        $latLngs = array(
            array(-12.0431846,-77.0276457),
            array(-12.0431846,-77.0276457),
            array(-16.156809696717,-72.33003616333),
            array(-16.156809696717,-72.33003616333),
            array(-15.6333333,-71.6),
            array(-15.650477986286,-71.657638549805),
            array(-15.650477986286,-71.657638549805),
            array(-15.622540873213,-71.9801902771),
            array(-15.6333333,-71.6),
            array(-15.7166667,-69.7833333),
            array(-15.7666667,-69.6833333),
            array(-15.8186675,-69.9689917),
            array(-15.838210264616,-70.02834134375),
            array(-15.838210264616,-70.02834134375),
            array(-13.5251785,-71.9724532),
            array(-13.5251785,-71.9724532),
            array(-13.5251785,-71.9724532),
            array(-13.4248029,-71.854248),
            array(-13.3067864357128,-72.077324539063),
            array(-13.28806511412,-71.831359863281),
            array(-13.3911111,-72.0477778),
            array(-13.3911111,-72.0477778),
            array(-13.3327778,-72.1563889),
            array(-13.2580556,-72.2633333),
            array(-13.5251785,-71.9724532),
            array(-13.274699510266,-72.501525878906),
            array(-13.2580556,-72.2633333),
            array(-13.5251785,-71.9724532),
            array(-12.0431846,-77.0276457)

        );

        $points = array();

        $map = new Evaneos_Map(350, 350, "-81.5263671875,-18.55724525089322,-68.6279296875,0.10338397570889836");

        foreach ($latLngs as $latLng) {
            $latLngPoint = $map->getPointFromLatLong(new Evaneos_Map_LatLng($latLng[0], $latLng[1]));
            $points[] = array($latLngPoint->x, $latLngPoint->y);
        }

        $this->view->points = $points;

        $pointsWorld = array();
        $map = new Evaneos_Map(745, 504, "-153.2813,-57.7041,180,82.3089");

        foreach ($latLngs as $latLng) {
            $latLngPoint = $map->getPointFromLatLong(new Evaneos_Map_LatLng($latLng[0], $latLng[1]));
            $pointsWorld[] = array($latLngPoint->x, $latLngPoint->y);
        }

        $this->view->pointsWorld = $pointsWorld;

        // SVG
        //$continents = new Evaneos_Map(726, 500, "-27.71875,34.06151704401634,46,71.94846496378558");
        //$continents = new Evaneos_Map(745, 504, "-153.2813,-57.7041,180,82.3089");

        $continents = new Evaneos_Map(745, 504, "-153.2813,-57.7041,180,82.3089");
        $this->view->svg = $continents->getSVGFromGeom("(SELECT geom FROM geo.continentsboundaries WHERE evaneos_id = 5) as sub");

        // bounds of France
        $franceBounds = "73.4140625,18.04368373690609,135.091796875,53.67376626766828";
        $francePixelBounds = $continents->getPixelBounds($franceBounds);
        $this->view->pixelBounds = $francePixelBounds;

        $europeBounds = "-25.78515625,34.42479286511488,32.9921875,65.04909200459856";
        $europePixelBounds = $continents->getPixelBounds($europeBounds);
        $this->view->europepixelBounds = $europePixelBounds;

        $bounds_ =  explode(",", $franceBounds);
        $latLng0 = new Evaneos_Map_LatLng($bounds_[3], $bounds_[0]);
        $latLng1 = new Evaneos_Map_LatLng($bounds_[1], $bounds_[2]);

        $point0 = $continents->getPointFromLatLong($latLng0);
        $point1 = $continents->getPointFromLatLong($latLng1);

        $this->view->point0 = $point0;
        $this->view->point1 = $point1;
    }

    function franceAction() {
        $this->_helper->layout->disableLayout();
    }


}
