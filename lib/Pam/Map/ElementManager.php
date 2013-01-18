<?php
include_once dirname(__FILE__) ."/ElementDAO.php";

class Pam_Map_ElementManager {

	protected $_DAO;
	protected $_map;

	public function __construct($dbParams, $map) {
		$this->_DAO = new Pam_Map_ElementDAO($dbParams);
		$this->_map = $map;
	}

	public function setMap($map) {
		$this->_DAO->setMap($map);
	}

	public function getElementByComputerName($computerName) {

		$id = $this->_DAO->getIdByComputerName($computerName);

		if ($id) {
			return $this->getbyId($id);
		} else {
			return false;
		}

	}

	public function getChildren($element, $scale = null) {

		$ids = $this->_DAO->getChildrenIdsFromElement($element, $scale);
		if($ids) {

			return $this->_DAO->getbyIds($ids);

		}

		return false;

	}

	public function getById($id) {
		$elements = $this->getByIds(array($id));
		if (count($elements) == 1) {
			return $elements[0];
		} else {
			return false;
		}
	}

	public function getByIds($ids) {
		return $this->_DAO->getByIds($ids);
	}
}