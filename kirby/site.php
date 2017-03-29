<?php

if (! file_exists(__DIR__ . DS . '.env')) {
    throw new Exception('Copy the ".env.example" file and name it ".env".');
}

require __DIR__ . DS . '.env';

$kirby = kirby();

kirby()->roots()->index = __DIR__;
kirby()->urls()->index = url::base();

kirby()->roots()->accounts = kirby()->roots()->index() . DS . 'accounts';
kirby()->roots()->cache = kirby()->roots()->index() . DS . 'cache';
kirby()->roots()->config = kirby()->roots()->index() . DS . 'config';
kirby()->roots()->plugins = kirby()->roots()->index() . DS . 'plugins';

kirby()->roots()->snippets = kirby()->roots()->index() . DS . 'resources' . DS . 'snippets';
kirby()->roots()->templates = kirby()->roots()->index() . DS . 'resources' . DS . 'views';

kirby()->roots()->assets = kirby()->roots()->index() . DS . 'public';
kirby()->urls()->assets = kirby()->urls()->index();

kirby()->roots()->avatars = kirby()->roots()->assets() . DS . 'avatars';
kirby()->urls()->avatars = kirby()->urls()->assets() . '/avatars';

kirby()->urls()->content = kirby()->urls()->index() . '/uploads';

kirby()->roots()->thumbs = kirby()->roots()->assets() . DS . 'thumbs';
kirby()->urls()->thumbs = kirby()->urls()->assets() . '/thumbs';
