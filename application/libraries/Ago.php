<?php

require_once 'Zend/View/Helper/Abstract.php';

class My_View_Helper_Ago extends Zend_View_Helper_Abstract
{
	public function ago($since) {
        $timeNow = new Zend_Date();
        $timeThen = new Zend_Date($since);
        $difference = $timeNow->sub($timeThen);
        return $this->_display($difference->toValue());
}

    public function _display($allSecs) {
        $seconds = $allSecs % 60; 
        $allMinutes = ($allSecs - $seconds) / 60;
        $minutes = $allMinutes % 60; 
        $allHours = ($allMinutes - $minutes) / 60;
        $hours =  $allHours % 24; 
        $allDays = ($allHours - $hours) / 24;
        
        if($allDays > 0){
            return $allDays . " jour".($allDays > 1 ? 's ' : ' '); 
        }elseif($hours > 0){
            return $hours . " heure".($hours > 1 ? 's ' : ' ');
        }elseif($minutes > 0){
            return $minutes . " minute".($minutes > 1 ? 's ': ' ');
        }else{
            return $seconds . " secondes";
        }
    }

}

?>
