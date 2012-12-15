<?php
class Front_StaticController extends PAM_Front_Controller {
    public function init() {
        parent::init();	
    }
    
    public function staticAction() {
        $filename = $this->_getParam('filename');
        if(is_file(APPLICATION_PATH.'/modules/front/views/scripts/static/'.$filename.'.phtml')){
            $this->view->filename = $filename;
        }else{
            throw new Zend_Controller_Action_Exception('This page does not exist',404);             
        }
    }
}
?>
