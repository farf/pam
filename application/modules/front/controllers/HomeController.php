<?php
class Front_HomeController extends PAM_Front_Controller {
    public function init() {
        parent::init();	
    }
    
    public function indexAction() {
        $this->view->headTitle('Carte Interactive en Javascript');
    }
}
?>
