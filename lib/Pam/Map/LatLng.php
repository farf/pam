<?php
/**
 * This is a LatLng for Pam Map
 */
class Pam_Map_LatLng {
    public $lat;
    public $lng;
    
    public function __construct($lat, $lng) {
        $this->lat = $lat;
        $this->lng = $lng;
    }
}
