<?php

/*
 * Site config
 */

c::set('url', $_ENV['SITE_URL']);
c::set('ssl', $_ENV['SITE_SSL']);
c::set('debug', $_ENV['SITE_DEBUG']);
c::set('environment', $_ENV['SITE_ENVIRONMENT']);

c::set('error', 'error');
c::set('home', 'home');

// c::set('date.handler', 'date');
// c::set('locale', [
//     LC_COLLATE  => 'en_US.utf8',
//     LC_MONETARY => 'en_US.utf8',
//     LC_NUMERIC  => 'en_US.utf8',
//     LC_TIME     => 'en_US.utf8',
//     LC_MESSAGES => 'en_US.utf8',
//     LC_CTYPE    => 'en_US.utf8'
// ]);

c::set('cache', $_ENV['SITE_CACHE']);
c::set('cache.driver', $_ENV['SITE_CACHE_DRIVER']);
c::set('cache.autoupdate', false);
c::set('cache.ignore', []);
// c::set('cache.options', [
//   'host'    => '127.0.0.1',
//   'port'    => 11211,
//   'prefix'  => null,
// ]);



/*
 * Panel config
 */

c::set('panel.info.versions', $_ENV['PANEL_INFO']);
c::set('panel.install', $_ENV['PANEL_INSTALL']);
c::set('panel.language', 'en');



/*
 * Plugins config
 */

c::set('cachebuster', $_ENV['CACHEBUSTER']);

c::set('google.analytics', $_ENV['GOOGLE_ANALYTICS']);

// Auto Git
c::set('autogit.branch', $_ENV['AUTOGIT_BRANCH']);
c::set('autogit.remote.name', $_ENV['AUTOGIT_REMOTE_NAME']);
c::set('autogit.remote.branch', $_ENV['AUTOGIT_REMOTE_BRANCH']);
c::set('autogit.webhook.secret', $_ENV['AUTOGIT_WEBHOOK_SECRET']);
c::set('autogit.webhook.url', $_ENV['AUTOGIT_WEBHOOK_URL']);
c::set('autogit.panel.user', true);
c::set('autogit.user.name', 'Auto Git');
c::set('autogit.user.email', 'autogit@localhost');
c::set('autogit.widget', true);
c::set('autogit.language', 'en');

// Sitemap
c::set('sitemap.include.invisible', false);
c::set('sitemap.ignored.pages', [
  site()->errorPage()
]);
c::set('sitemap.ignored.templates', []);
c::set('sitemap.process', function($pages) {
    return $pages->filter(function($page) {
        if ($page->intendedTemplate() === 'post') {
            return $page->date() < time();
        }

        return true;
    });
});



/*
 * Kirby license
 */

c::set('license', $_ENV['KIRBY_LICENSE']);
