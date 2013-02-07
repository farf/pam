<?php


class Pam_Map_Element {

	public $id;
	public $zoom = 0;
	public $name;
	public $bounds = "";
	public $computername = "";
	public $svg = "";
	public $over = "over";

	public function __construct($id, $zoom, $name, $computername, $bounds = "", $svg = "") {
		$this->id = $id;
		$this->zoom = $zoom;
		$this->name = $name;
		$this->bounds = $bounds;
		$this->computername = $computername;
		$this->svg = $svg;

	}

	public function toArray() {
		return array(
			"id" => $this->id,
			"title" => $this->name,
			"path" => $this->svg,
			"attrOver" => $this->over
		);
	}

}
