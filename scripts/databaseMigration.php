<?php

/*********************************************************/
/* Début initialisation gestion des options avec Zend... */
/*********************************************************/

define('APPLICATION_PATH', dirname(dirname(__FILE__)) . '/application');
define('APPLICATION_ENV', 'prod');

require_once 'Zend/Loader/Autoloader.php';
Zend_Loader_Autoloader::getInstance();
$application = new Zend_Application(
   APPLICATION_ENV,
   APPLICATION_PATH . '/configs/application.ini'
);
$application->bootstrap('Doctrine');

$opts = new Zend_Console_Getopt(
    array(
        'help|h' => 'Accéder à l\'aide',
        'migrate|m' => 'Script en mode migration',
        'generate|g' => 'Script en mode génération des classes de migration à partir du model doctrine',
        'class|c=s' => 'Génère une classe de migration vierge (A utiliser avec l\'option -g)',
        'gen|t' => 'Génère le model doctrine sans les classes filles',
    )
);

try {
    $opts->parse();
    if (isset($opts->t)) {
        echo dirname(dirname(__FILE__));
        $modelsPath = dirname(dirname(__FILE__)) . '/application/models';

        Doctrine_Core::generateModelsFromDb($modelsPath, array('doctrine'), array('generateTableClasses' => false));
        echo 'ok';
        exit;
    }      
    if(isset($opts->m) && isset($opts->g)) {
        throw new Zend_Console_Getopt_Exception('Le script ne peut pas être utilisé à la fois en mode migration et en mode génération (options -m et -g)');
    }

    if(!$opts->h && !$opts->m && !$opts->v && !$opts->g && !$opts->c && !$opts->t && !$opts->u){
        echo $opts->getUsageMessage();
    }
} catch(Zend_Console_Getopt_Exception $e) {
    echo $e->getUsageMessage();
    exit;
}

if(isset($opts->h)) {
    echo $opts->getUsageMessage();
    exit;
}

/**************************************/
/* Fin initialisation options zend... */
/**************************************/

$migrationsPath = dirname(dirname(__FILE__)) . '/application/models/migration';

if(isset($opts->m)) {
    $migration = new Doctrine_Migration($migrationsPath);

    if(isset($opts->v)) {
        $version = $opts->getOption('version');
        $migration->migrate($version);
    } else {
        echo 'Version actuelle : ' . $migration->getCurrentVersion() . ", migration en cours...\n\n";
        $migration->migrate();
    }
    
    echo 'La base de données a été migrée vers la version ' . $migration->getCurrentVersion() . "\n";
}
if(isset($opts->g)) {
    if (isset($opts->c)) {
        Doctrine_Core::generateMigrationClass($opts->c, $migrationsPath);
        echo 'La classe de migration "' . $opts->c . '" a bien été générée' . "\n";
    } else {
        Doctrine_Core::generateMigrationsFromModels($migrationsPath, APPLICATION_PATH . '/models');
        echo 'Les classes de migration ont été générées à partir du modèle Doctrine actuel' . "\n";
    }
}
?>
