<?php
// if(!r::ajax()) go(url('error'));

header('Content-type: application/json; charset=utf-8');

$data = $site->children()->visible();
$json = array();
$json['data'] = array();

foreach($data as $page) {
  $json['data'][] = array(
    'url'   => (string)$page->slug(),
    'title' => (string)$page->title()
  );
}

echo json_encode($json); ?>
