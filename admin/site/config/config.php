<?php

## Licence
c::set('license', 'put your license key here');

## Redirect to admin
c::set('home', 'redirect');

## Search Query
c::set('routes', array(
  array(
    'pattern' => 'api/search/(:all)',
    'action' => function ($uri) {
      $query   = $uri;
      $results = site()->search($query)->toJson();

      return response::json(array(
        $results,
      ));
    }
  )
));