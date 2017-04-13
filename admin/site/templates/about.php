<?php

// if(!r::ajax()) go(url('error'));

header('Content-type: application/json; charset=utf-8');

$data = $page;
$json = array();

$json[] = array(
  'url'   => (string)$page->url(),
  'title' => (string)$page->title(),
  'text'  => (string)$page->text(),
  'email'  => (string)$page->email()
);

echo json_encode($json);

?>
