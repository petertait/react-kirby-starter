<?php

// if(!r::ajax()) go(url('error'));

header('Content-type: application/json; charset=utf-8');

$data = $page->parent();
$json = array();

$json[] = array(
  'url'   => (string)$data->url(),
  'title' => (string)$data->title(),
  'text'  => (string)$data->text(),
  'email'  => (string)$data->email()
);



echo json_encode($json);

?>
