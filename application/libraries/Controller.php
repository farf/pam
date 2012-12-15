<?php
class PAM_Controller extends Zend_Controller_Action {
    protected $session_namespace = 'parent';
    protected $session = null;
    
    public function init() {
        $this->view->config = $this->config = Zend_Registry::get('config');
        $this->view->messages = $this->_helper->getHelper('FlashMessenger')->getMessages();
    }
    
    protected function slug($s) {
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
    
    protected function get_session() {
        if ($this->session === null) {
            $this->session = new Zend_Session_Namespace($this->session_namespace);
        }
        return $this->session;
    }
    
    protected function is_remote_file($url) {
        return @fopen($url, 'r') !== false;
    }
}
?>
