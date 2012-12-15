<?php
class PAM_DoctrinePaginator implements Zend_Paginator_Adapter_Interface {
    protected $_select;
    protected $_customCount;
    
    public function __construct(Doctrine_Query_Abstract $select, $count = null) {
        $this->_select = $select;
        $this->_customCount = $count;
    }
    
    public function getItems($offset, $itemCountPerPage) {
        return $this->_select->offset($this->_customCount !== null ? 0 : $offset)->limit($itemCountPerPage)->fetchArray();
    }
    
    public function count() {
        return $this->_customCount !== null ? $this->_customCount : $this->_select->count();
    }
}
?>
