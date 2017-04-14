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

// Children
$children = $site->find('about')->children()->visible();
foreach($children as $page) {
  $json['children'][] = array(
    'url'   => (string)$page->slug(),
    'title' => (string)$page->title()
  );
}

echo json_encode($json);

?>
