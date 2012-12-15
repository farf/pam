<?php
class Bootstrap extends Zend_Application_Bootstrap_Bootstrap {
    protected function _initRoutes() {
        $this->bootstrap('frontController');
        $router = $this->getResource('frontController')->getRouter();
        $router->addConfig(new Zend_Config_Ini(APPLICATION_PATH . '/configs/routes-front.ini'));
        return $router;
    }
   
   protected function _initCacheConfiguration(){
		$front = Zend_Controller_Front::getInstance();
		$front->setParam('disableOutputBuffering', true);
	}	
    /**
     * Initialize module resources
     * @return mixed registry items
     */
    protected function _initAutoload() {
        $autoloader = new Zend_Application_Module_Autoloader(array(
            'namespace' => 'Application_',
            'basePath' => dirname(__FILE__),
        ));
        
        new Zend_Loader_Autoloader_Resource(array(
            'namespace'    => '',
            'basePath'    => APPLICATION_PATH,
            'resourceTypes' => array(
                'librairies' => array(
                    'path'        => 'libraries',
                    'namespace'    => 'PAM',
                ), 'forms' => array(
                    'path'        => 'forms',
                    'namespace'    => 'MAP_Form',
               ), 'front_forms' => array(
                    'path'      => 'modules/front/forms',
                    'namespace' => 'Front_Form',
				), 	'default_librairies' => array(
                    'path'        => 'modules/default/libraries',
                    'namespace'    => 'PAM_Default',
                ), 'front_librairies' => array(
                    'path'        => 'modules/front/libraries',
                    'namespace'    => 'PAM_Front',
                ),
            ),
        ));
        
        // Add resource type for Module Api
        $autoloader->addResourceType('api','api/','Api');
        return $autoloader;
    }
    
    protected function _initDoctrine() {
        require_once 'Doctrine/Core.php';
        
        $autoloader = Zend_Loader_Autoloader::getInstance();
        $autoloader->unshiftAutoloader(array('Doctrine_Core', 'autoload'), 'Doctrine');
        $autoloader->unshiftAutoloader(array('Doctrine_Core', 'modelsAutoload'));
        
        Doctrine_Manager::getInstance()->setAttribute(Doctrine_Core::ATTR_MODEL_LOADING, Doctrine_Core::MODEL_LOADING_CONSERVATIVE);
        Doctrine_Manager::getInstance()->setAttribute(Doctrine_Core::ATTR_AUTOLOAD_TABLE_CLASSES, true);
        
        $config = new Zend_Config_Ini(APPLICATION_PATH . '/configs/db.ini', APPLICATION_ENV);
        $conn = Doctrine_Manager::connection(new PDO($config->dsn, $config->username, $config->password));
        $conn->setAttribute(Doctrine_Core::ATTR_QUOTE_IDENTIFIER, true);
        $conn->setAttribute(Doctrine_Core::ATTR_USE_NATIVE_ENUM, true);
        $conn->setCharset('utf8');
        
        /*if (in_array(APPLICATION_ENV, array('dev', 'preprod'))) {
            $profiler = new Doctrine_Connection_Profiler();
            $conn->setListener($profiler);
            Zend_Registry::set('Doctrine_Profiler', $profiler);
        }*/
        Doctrine_Core::loadModels(APPLICATION_PATH . '/models/');
    }
    
    protected static function _initConfig () {
        $config = new Zend_Config_Ini(APPLICATION_PATH . '/configs/application.ini', APPLICATION_ENV);
        Zend_Registry::set('config', $config);
        Zend_Locale::disableCache(true);
    }
}
?>
