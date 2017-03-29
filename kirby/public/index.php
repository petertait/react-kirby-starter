<?php

define('DS', DIRECTORY_SEPARATOR);

// load kirby
require(dirname(__DIR__) . DS . 'kirby' . DS . 'bootstrap.php');

// check for a custom site.php
if(file_exists(dirname(__DIR__) . DS . 'site.php')) {
  require(dirname(__DIR__) . DS . 'site.php');
} else {
  $kirby = kirby();
}

// render
echo $kirby->launch();
