<?php

require_once 'Zend/View/Helper/Abstract.php';

class My_View_Helper_UrlWithDomain extends Zend_View_Helper_Abstract
{
	public function urlWithDomain($subdomain, $domain, array $urlOptions = array(), $name = null, $reset = false, $encode = true)
	{
		$router = Zend_Controller_Front::getInstance()->getRouter();
		if( !empty($domain) && !empty($subdomain)){
			return  "http://".$subdomain.".".$domain.$router->assemble($urlOptions, $name, $reset, $encode);
		}else{
			return  $router->assemble($urlOptions, $name, $reset, $encode);
		}
	}

}

?>
