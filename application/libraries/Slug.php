<?php

require_once 'Zend/View/Helper/Abstract.php';

class My_View_Helper_Slug extends Zend_View_Helper_Abstract
{
   
    public function slug($s) {
        // Lower case
        $s = strtolower(utf8_decode($s));
        // Replaces accentuated chars by their non-accentuated version and spaces by "-"
        $s = strtr($s, utf8_decode(' @ÀÁÂÃÄÅàáâãäåÒÓÔÕÖØòóôõöøÈÉÊËéèêëÇçÌÍÎÏìíîïÙÚÛÜùúûüÿÑñ'), utf8_decode('-aaaaaaaaaaaaaooooooooooooeeeeeeeecciiiiiiiiuuuuuuuuynn'));
        // Replaces other chars by "-"
        $s = preg_replace('#([^a-z0-9-])#', '-', $s);
        // Remove consecutives "-"
        $s = preg_replace('#([-]+)#', '-', $s);
        // Trim spaces and "-"
        $s = trim($s, ' -');
        return $s;
    }
 }

?>
