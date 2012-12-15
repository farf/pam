<?php
class PAM_Message {
    protected $type;
    protected $text;
    
    public function __construct($text, $type = 'message') {
        $this->type = $type;
        $this->text = $text;
    }
    
    public function getType() {
        return $this->type;
    }
    
    public function getText() {
        return $this->text;
    }
}
?>
