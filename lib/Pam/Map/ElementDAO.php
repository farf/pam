<?php
include_once dirname(__FILE__) ."/../Db/DAO.php";
include_once dirname(__FILE__) ."/../Map/element.php";

class Pam_Map_ElementDAO extends Pam_Db_DAO {

	protected $_map = null;

	public function setMap($map) {
		$this->_map = $map;
	}

	public function getByIds($ids) {
		if ($this->_map !== NULL) {
			$translateX = $this->_map->mapX - $this->_map->offsetX ;
			$translateY =  $this->_map->mapY - $this->_map->offsetY;
			$sql = "SELECT id, computername, bounds, zoom, name, getsvg2(geom, $1, $2, $3, $4, $5) as svg  FROM joinmap WHERE id IN (".implode($ids, ',').")";
			$elements = $this->_conn->query($sql, array(
				$this->_map->getRatio(),
				$this->_map->getPolygon(),
				1,
				-$translateX,
				$translateY
			));
		} else {
			$sql = "SELECT id, computername, bounds, zoom, name  FROM joinmap WHERE id IN (".implode($ids, ',').")";
			$elements = $this->_conn->query($sql);
		}

		if (!$elements) {
			return false;
		} else {

			$ret = array();
			foreach ($elements as $element) {

				if (!isset($element['svg'])) {
					$element['svg'] = "";
				}

				$ret[] = new Pam_Map_Element($element["id"], $element["zoom"], $element["name"], $element["computername"], $element["bounds"], $element["svg"]);
			}

			return $ret;

		}
	}

	public function getChildrenIdsFromId($ids) {

	}

	public function getIdByComputerName($computerName) {

		$sql = "SELECT id FROM joinmap WHERE computername = $1";

		$id = $this->_conn->query($sql, array($computerName));

		if (!$id) {
			return false;
		} else {

			return intval($id[0]['id']);
		}
	}

	public function getChildrenIdsFromElement($element, $scale = null) {
		if ($scale === NULL) {

			$sql = "SELECT id FROM joinmap WHERE parent_id = $1";

			$ids = $this->_conn->query($sql, array($element->id));

			return $this->cleanIds($ids);

		} else {

			$sql = <<<EOL

WITH RECURSIVE recursetree(id, parent_id) AS (
    SELECT id, parent_id, zoom FROM joinmap WHERE id = $1
  UNION
    SELECT t.id, t.parent_id, t.zoom
    FROM joinmap t
    JOIN recursetree rt ON rt.id = t.parent_id
    WHERE t.zoom <= $2
  )
SELECT id FROM recursetree WHERE zoom = $2;

EOL;
			$ids = $this->_conn->query($sql, array($element->id, $scale));

			return $this->cleanIds($ids);
		}



	}

	public function cleanIds($ids) {
		$ret = array();

		foreach ($ids as $id) {

			if (is_array($id)) {
				$ret[] = $id['id'];
			}
		}

		return $ret;
	}

}