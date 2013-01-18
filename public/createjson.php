<?php

include_once dirname(__FILE__) . '/../lib/Pam/Map/ElementManager.php';
include_once dirname(__FILE__) . '/../lib/Pam/Map.php';

class MapJsonCreator {
	/**
	 *  This function permits to create the js with the data of the map
	 *  It takes as params:
	 *  - size of the map: 500x500 by default
	 *  - main element with name
	 *  ex: map_france_2_500x500.js
	 *  @return array|false array(filename, element, width, height)
	 */
	public function getDataFromFileName($fileName) {
		if (!preg_match('/map_(.*)_([0-5])_([0-5])_(.*)x(.*)\.js/', $fileName, $matches)) {
			die("The filename is not well formated");
			return false;
		}

		return $matches;
	}

	public function getMapFromFileName($fileName) {

		$data = $this->getDataFromFileName($fileName);
		return $this->getMapFromData($data);
	}

	public function getMapFromData($data) {
		// Get the DAO
		$mapElementManager = new Pam_Map_ElementManager(new Pam_Db_Db("map", "farf", "ip84rzgh"), null);

		// Create the Map Element
		$mapElement = $mapElementManager->getElementByComputerName($data[1]);
		// Create the Map
		$map =  new Pam_Map($data[4], $data[5], $mapElement->bounds);
		$mapElementManager->setMap($map);

		// Get children
		$elements = $mapElementManager->getChildren($mapElement, intval($data[3]));

		$map->addElements($elements);

		return $map;

	}

	public function getJsonFromElementsAndMap($elements, $map) {
		if(is_array($elements)) {
			$ret = array();
			foreach ($elements as $element) {
				$ret[] = array("id"=>$element->id, "title"=>$element->name, "path"=>$element->svg);
			}
			return json_encode($ret);
		} else {
			return "{}";
		}
	}


}


$expires = 60*60*24*300;
header("Pragma: public");
header("Cache-Control: maxage=".$expires);
header('Expires: ' . gmdate('D, d M Y H:i:s', time()+$expires) . ' GMT');

date_default_timezone_set('Europe/Paris');

// Get name of the directory we have to take
$_exploded = explode('/', $_SERVER['REQUEST_URI']);


// Check format: with or without version
if (count($_exploded) != 2) {
    die("I can't treat this file (/)" . count($_exploded));
}

$fileName = $_exploded[1];

$creator = new MapJsonCreator($fileName);

$map = $creator->getMapFromFileName($fileName);

$js = <<<EOL
	
if(typeof(Pam) == 'undefined') {Pam = {}};

Pam.map = 
EOL;

$js .= json_encode($map->toArray(), true);

echo $js;
?>