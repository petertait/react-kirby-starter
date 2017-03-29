# Kirby Boilerplate

Kirby CMS Boilerplate I've put together using my preferred technologies.

## Technologies
- [Kirby CMS](https://getkirby.com)
- [Laravel Mix](https://github.com/JeffreyWay/laravel-mix/tree/master/docs#readme)
- [Yarn](https://yarnpkg.com)
- [Webpack](https://webpack.js.org)
- [PostCSS](http://postcss.org)
- [Tachyons CSS](http://tachyons.io)

## Folder Structure
For improved security, I've opted to change the folder structure to keep only public assets on the web root, called `/public`. All other important files such as `/kirby`, `/content`, `/site`, `.env`, source and build files, etc, remain a outside the web root.

<details>
    <summary><strong>Show folder structure</strong> 👁</summary><p>

    ├── accounts
    ├── cache
    ├── config
    ├── content
    ├── kirby
    ├── package.json
    ├── panel
    ├── plugins
    ├── public
    │   ├── avatars
    │   ├── css
    │   ├── fonts
    │   ├── images
    │   ├── index.php
    │   ├── js
    │   ├── robots.txt
    │   ├── thumbs
    ├── resources
    │   ├── js
    │   ├── sass
    │   ├── snippets
    │   └── templates
    ├── site
    │   ├── blueprints
    │   ├── controllers
    │   └── models
    ├── site.php
    ├── webpack.mix.js
    └── yarn.lock

</p></details>

> Make sure your web server (Nginx, Apache, etc) is properly configured. Nginx sample configuration is available below.

## Installation

### Kirby
Use Kirby's [command line interface](https://github.com/getkirby/cli) to install Kirby and the Panel:

    $ kirby install:core

    $ kirby install:panel

Use [Yarn](https://yarnpkg.com) to install the Javascript dependencies:

    $ yarn

> Alternatively you can run `npm install`.

### Environment file
Copy the `.env.example` file to `.env` and adjust the settings to your needs.

> The `.env` file should remain out of version control as it may contain sensitive data such as API keys.

### Nginx
Next up, change your Nginx configuration to accomodate the new structure:

<details>
    <summary><strong>Show Nginx configuration</strong> 👁</summary><p>

    server {
        listen 80;
        listen [::]:80;
        server_name example.com;
        root /var/www/example.com/public;

        add_header X-Frame-Options "SAMEORIGIN";
        add_header X-XSS-Protection "1; mode=block";
        add_header X-Content-Type-Options "nosniff";

        index.html index.php;

        charset utf-8;
        #client_max_body_size 20M;

        # Enable cache busting
        location ~* (.+)\.(?:\d+)\.(js|css)$ {
            try_files $uri $1.$2;
        }

        # Expire rules for static content

        # Feed
        location ~* \.(?:atom|rss)$ {
            expires 1h;
        }

        # Media: images, icons, video, audio, HTC
        location ~* \.(?:jpe?g|gif|png|ico|cur|gz|svg|svgz|mp4|ogg|ogv|webm|htc)$ {
            expires 1M;
            access_log off;
            add_header Cache-Control "public";
        }

        # CSS and Javascript
        location ~* \.(?:css|js)$ {
            expires 1y;
            access_log off;
        }

        # Rewrite user uploaded content
        location ~ ^/uploads(/.*\.(jpe?g|gif|png|svg|pdf|mp3))$ {
            root /var/www/example.com/content/;
            try_files $1 =404;
        }

        location / {
            try_files $uri $uri/ /index.php?$query_string;
        }

        location /panel {
            root /var/www/example.com/;
            try_files $uri $uri/ /panel/index.php?$query_string;

            location ~ \.php$ {
                fastcgi_split_path_info ^(.+\.php)(/.+)$;
                fastcgi_pass unix:/var/run/php/php7.1-fpm.sock;
                fastcgi_index index.php;
                include fastcgi_params;
            }
        }

        location = /favicon.ico { access_log off; log_not_found off; }
        location = /robots.txt  { access_log off; log_not_found off; }
        location = /sitemap.xml { access_log off; log_not_found off; }

        access_log off;
        error_log  /var/log/nginx/example.com-error.log error;

        error_page 404 /index.php;

        location ~ \.php$ {
            fastcgi_split_path_info ^(.+\.php)(/.+)$;
            fastcgi_pass unix:/var/run/php/php7.1-fpm.sock;
            fastcgi_index index.php;
            include fastcgi_params;
        }

        # Prevent clients from accessing hidden files (starting with a dot)
        # Access to `/.well-known/` is allowed.
        # https://www.mnot.net/blog/2010/04/07/well-known
        # https://tools.ietf.org/html/rfc5785
        location ~* /\.(?!well-known\/) {
            deny all;
        }

        # Prevent clients from accessing to backup/config/source files
        location ~* (?:\.(?:bak|conf|dist|fla|in[ci]|log|psd|sh|sql|sw[op])|~)$ {
            deny all;
        }
    }

</p></details>

This configuration ensures that user uploaded files on the `/content` folder are publicly accessible as `/uploads`: `https://example.com/uploads/home/welcome.jpg` will look for the `/home/welcome.jpg` file inside the `/content` directory.

The `^/uploads(/.*\.(jpe?g|gif|png|svg|pdf|mp3))$` rule purposely includes only the most common file types. If your site requires other file types, just add them there to make them available as well.

### Laravel Valet
I use [Laravel Valet](https://laravel.com/docs/master/valet) on my local environment to easily serve my sites.

> Valet is a Laravel development environment for Mac minimalists. No Vagrant, no /etc/hosts file. You can even share your sites publicly using local tunnels. _Yeah, we like it too._

Laravel Valet ships ready to serve Kirby sites, but since our folder structure is a bit different, we need to add a custom Valet driver to `~/.valet/Drivers`:

<details>
    <summary><strong>Show `KirbyBoilerplateValetDriver.php`</strong> 👁</summary><p>

```php
<?php

class KirbyBoilerplateValetDriver extends ValetDriver
{
    /**
     * Determine if the driver serves the request.
     *
     * @param  string  $sitePath
     * @param  string  $siteName
     * @param  string  $uri
     * @return void
     */
    public function serves($sitePath, $siteName, $uri)
    {
        return is_dir($sitePath.'/kirby') && is_dir($sitePath.'/public');
    }

    /**
     * Determine if the incoming request is for a static file.
     *
     * @param  string  $sitePath
     * @param  string  $siteName
     * @param  string  $uri
     * @return string|false
     */
    public function isStaticFile($sitePath, $siteName, $uri)
    {
        $contentUri = $uri;

        if (strpos($uri, '/uploads/') === 0) {
            $contentUri = substr($uri, 8);
        }

        if ($this->isActualFile($contentFilePath = $sitePath.'/content'.$contentUri)) {
            return $contentFilePath;
        }

        if (strpos($uri, '/panel/') === 0) {
            if ($this->isActualFile($panelFilePath = $sitePath.$uri)) {
                return $panelFilePath;
            }
        }

        if ($this->isActualFile($staticFilePath = $sitePath.'/public'.$uri)) {
            return $staticFilePath;
        }

        return false;
    }

    /**
     * Get the fully resolved path to the application's front controller.
     *
     * @param  string  $sitePath
     * @param  string  $siteName
     * @param  string  $uri
     * @return string
     */
    public function frontControllerPath($sitePath, $siteName, $uri)
    {
        // Needed to force Kirby to use *.dev to generate its URLs...
        $_SERVER['SERVER_NAME'] = $_SERVER['HTTP_HOST'];

        if (preg_match('/^\/panel/', $uri)) {
            $_SERVER['SCRIPT_NAME'] = '/panel/index.php';

            return $sitePath.'/panel/index.php';
        }

        $_SERVER['SCRIPT_NAME'] = '/public/index.php';

        return $sitePath.'/public/index.php';
    }
}
```

</p></details>

## Usage
Laravel Mix is a configuration layer on top of Webpack, so to run your Mix tasks you only need to execute one of the NPM scripts that is included on the `package.json` file.

Run all Mix tasks once:

    $ yarn run dev

Run all Mix tasks and watch all relevant files for changes:

    $ yarn run watch

Run all Mix tasks and minify output:

    $ yarn run production

## Recommended Plugins

### Auto Git

    $ kirby plugin:install pedroborges/kirby-autogit

### Cachebuster

    $ kirby plugin:install cachebuster-plugin

### Google Analytics

    $ kirby plugin:install pedroborges/kirby-google-analytics

### Sitemap

    $ kirby plugin:install pedroborges/kirby-xml-sitemap

## Change Log
All notable changes to this project will be documented at: <https://github.com/pedroborges/kirby-boilerplate/blob/master/changelog.md>

## License
Kirby Boilerplate is open-sourced software licensed under the [MIT license](http://www.opensource.org/licenses/mit-license.php).

Copyright © 2017 Pedro Borges <oi@pedroborg.es>
