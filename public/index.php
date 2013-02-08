<?php
// Define path to application directory
defined('APPLICATION_PATH')
	|| define('APPLICATION_PATH', realpath(dirname(__FILE__) . '/../application'));

// Define application environment
defined('APPLICATION_ENV')
	|| define('APPLICATION_ENV', (getenv('APPLICATION_ENV') ? getenv('APPLICATION_ENV') : 'prod'));


set_include_path(get_include_path().PATH_SEPARATOR.realpath(dirname(__FILE__).'/../lib/Zend/1.12.1').PATH_SEPARATOR.realpath(dirname(__FILE__).'/../lib/Doctrine/1.2.2'));
/** Zend_Application */
require_once 'Zend/Application.php';
// Create application, bootstrap, and run
$application = new Zend_Application(
	APPLICATION_ENV,
	APPLICATION_PATH . '/configs/application.ini'
);

$application->bootstrap()
            ->run();