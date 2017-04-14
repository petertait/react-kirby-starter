<?php
// if(!r::ajax()) go(url('error'));
header('Content-type: application/json; charset=utf-8');

$data = $page;
$json = array();

// Site Details
$json['site'][] = array(
  'url'   => (string)$site->slug(),
  'title' => (string)$site->title()
);

// Site Navigation
$navigation = $site->children()->visible();
foreach($navigation as $page) {
  $json['navigation'][] = array(
    'url'   => (string)$page->slug(),
    'title' => (string)$page->title()
  );
}

// Home Details
$home = $site->find('home');
$json['home'][] = array(
  'url'   => (string)$home->slug(),
  'title' => (string)$home->title()
);

echo json_encode($json); ?>
