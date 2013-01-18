<?php
/**
 * This file aggregates files for js or css.
 */

$expires = 60*60*24*300;
header("Pragma: public");
header("Cache-Control: maxage=".$expires);
header('Expires: ' . gmdate('D, d M Y H:i:s', time()+$expires) . ' GMT');

include_once dirname(__FILE__) . '/../lib/Pam/FileConcatener.php';
$concat = new Pam_FileConcatener(false);

// Get name of the directory we have to take
$_exploded = explode('/', $_SERVER['REQUEST_URI']);

// Check format: with or without version
if (count($_exploded) != 2) {
    die("I can't treat this file (/)" . count($_exploded));
}

$file = $_exploded[1];

// Get Version
$_exploded = explode("_", $file);

if (count($_exploded) < 2) {
    die("I can't treat this file (_)");
}

if (count($_exploded) == 2) {
    $version = $_exploded[1];
    $includeName = "includes.php";
}


$_pieces = explode(".", $version);

// Check format
if (count($_pieces) != 2) {
    die("I can't treat this file ." . $version);
}

$type = $_pieces[1];

// Check format
if ($type != "css" && $type != "js" && $type != "less") {
    die("I can't treat this type of file");
}

if ($type == "css" || $type == "less") {
    $type = "css";
    header('Content-Type: text/css; charset=UTF-8');
} else {
    header('Content-Type: application/x-javascript');
}



$includesFileName = dirname(__FILE__) . '/../'.$type.'/'.$includeName;
// check directory exist
if (!file_exists($includesFileName)) {
    die("it doesn't seem to be a real file includes.");
}

require $includesFileName;

$ret = $concat->direct($includes, strtoupper($type), false);;


// save file
if ($version != 'debug.'.$type) {
//    file_put_contents(dirname(__FILE__) . '/' . $fileName, $ret);
    file_put_contents($fileName, $ret);
}

echo $ret;


?>
