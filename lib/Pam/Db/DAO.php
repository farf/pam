<?php
include_once dirname(__FILE__) ."/../Db/Db.php";

class Pam_Db_DAO {

	protected $_conn =  null;

	public function __construct($dbParams) {
		$this->_conn = $dbParams;
	}

}