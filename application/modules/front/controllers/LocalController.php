<?php
class Front_LocalController extends PAM_Front_Controller {
    public function init() {
        parent::init();	
    }
    
    public function indexAction() {
        $this->view->headScript()->appendFile('/mapnager/assets/fr.js', 'text/javascript');

        $this->view->headScript()->appendFile('/mapnager/js/mapnager.js', 'text/javascript');
        $this->view->headLink()->appendStylesheet('/mapnager/js/mapnager.css');
        
        //TODO : remove this
        $script = '
$(document).ready(function() {
        var data = JSON.parse($("#data").html());
            var map = new Pam.Map.DomMap($(".mapContent"), data);
});';

        $this->view->headScript()->appendScript($script, 'text/javascript');
    }
}
?>
