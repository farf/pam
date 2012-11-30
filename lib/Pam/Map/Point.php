<?php
/**
 * This is a point on an Pam Map 
 */
class Pam_Map_Point {
    public $x;
    public $y;
    
    public function __construct($x, $y) {
        $this->x = round($x);
        $this->y = round($y);
    }
}
