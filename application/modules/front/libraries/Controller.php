<?php
class PAM_Front_Controller extends PAM_Controller {
    
    public function init() {
        parent::init();
	    $this->_helper->layout->setLayout('front');
        $this->view->controller = $this->getRequest()->getControllerName();
        //TODO : variabiliser
        setlocale(LC_TIME, 'fr_FR.UTF8', 'fr.UTF8', 'fr_FR.UTF-8', 'fr.UTF-8', 'fr_FR');        
    }
    
}


?>
