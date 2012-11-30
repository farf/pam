<?php
class Pam_FileConcatener
{
    /********************************************************
    /* PUBLIC
    /*******************************************************/
    private $_comp = false;
    
    public function __construct($type_comp = false) {
        $this->_comp = $type_comp;
                
    }
    
    /**
     * 
     * @param $paths array of paths. If an entry of the array is an array => it is considered as a javascript string directly added to the return js.
     * @param $base the baspath for the url. Final path = $base.$path
     */
    public function direct($paths, $typeFile = "JS", $compress = false, $pretty = true, $debug = true)
    {
        $source = "";
        foreach ($paths as $path) { 
            if (is_array($path)) {
                switch (count($path)) {
                    case 1:
                        $source .= $path[0];                        
                        break;
                    case 2:
                    case 3:
                        switch ($path[1]) {
                            case "JS":
                            case "CSS":
                                $source .= $path[0];
                                break;    
                            case "FILE":
                                if ($debug == false && count($path) == 3) {
                                    $source .= $this->readCode($path[2], $typeFile, $pretty && $debug);
                                } else {
                                    $source .= $this->readCode($path[0], $typeFile, $pretty && $debug);
                                }
                                break;
                        }
                        break;
                }
            } else {
                $source .= $this->readCode($path, $typeFile, $pretty && $debug);
            }
        }
        return ($this->_comp || $compress) ? $this->compress($source, $typeFile) : $source;
    }
    
    /********************************************************
    /* PROTECTED / PRIVATE
    /*******************************************************/
    
    protected function readCode($path, $typeFile = "JS", $pretty = true) 
    {
        $ret = "";
        $aPath = explode(".", $path);
        $pathExt = $aPath[count($aPath) - 1];
        
        if (file_exists($path)) {
            if ($typeFile == "JS") {
                if ($pretty) {
                    $ret .= "\n//----------------------------------------------------\n";
                    $ret .= "// file: $path \n";
                    $ret .= "//----------------------------------------------------\n";
                } 
            }
            else if ($typeFile == "CSS") {
                if ($pretty) {
                    $ret .= "\n/******************************************************\n";
                    $ret .= " * file: $path \n";
                    $ret .= " ******************************************************/\n";
                }
            }
            
            if (strtoupper($pathExt) === 'LESS') {
                require_once __DIR__ . '/../Less/lessc.inc.php';
                $less = new lessc();
                $contents = $less->compileFile($path);
            }
            else {
                $contents = file_get_contents($path);
            }
            
            $ret .= "\n$contents";
        } else {
            if ($typeFile == "JS") {
                if ($pretty) {
                    $ret .= "\n//----------------------------------------------------\n";
                    $ret .= "// FILE NOT FOUND: $path \n";
                    $ret .= "//----------------------------------------------------\n";
                } 
            }
            else if ($typeFile == "CSS") {
                if ($pretty) {
                
                    $ret .= "\n/******************************************************\n";
                    $ret .= " * FILE NOT FOUND: $path \n";
                    $ret .= " ******************************************************/\n";
                }
            }
        }
        return $ret;
    }
    
    protected function compress($string, $fileType)
    {
        
        
        
        // google CP does not support css
        if (strtolower($fileType) != "js") return $string;

        $level = ("WHITESPACE_ONLY");
        $level = ("SIMPLE_OPTIMIZATIONS");
        //$level = ("ADVANCED_OPTIMIZATIONS");



        // initiate google
        set_include_path(get_include_path() . PATH_SEPARATOR . dirname(__FILE__) .'/..');
        include_once dirname(__FILE__) .'/../Zend/Http/Client.php';
        $client = new Zend_Http_Client("http://closure-compiler.appspot.com/compile");
        $client->setParameterPost('js_code', $string);
        $client->setParameterPost('compilation_level', $level);
        $client->setParameterPost('output_info', "compiled_code");
        $client->setParameterPost('output_format', "json");
        $config  = array( 'timeout' => 500 );
        $client->setConfig($config);
        $response = $client->request("POST");

        // parse response
        if ($response) {
            include_once dirname(__FILE__) .'/../Zend/Json.php';
            $body = Zend_Json::decode($response->getBody());

            if (isset($body["serverErrors"]) || !isset($body["compiledCode"]) || $body["compiledCode"] === "") {
                return "alert(\"JS was not minified - code was not concatenated " . $body["serverErrors"] . "\");";
            } else {
                return $body["compiledCode"];
            }
        }
        
        return "alert(\"JS was not minified - code was not concatenated\");";  
    }
}