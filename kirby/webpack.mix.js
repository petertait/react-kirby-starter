const { mix } = require('laravel-mix')

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your site. By default, we are compiling the Sass file
 | as well as bundling up your JS files.
 |
 | To learn more about Mix visit: https://laravel.com/docs/master/mix
 */

mix.js('resources/js/main.js', 'public/js')
   .sass('resources/sass/main.scss', 'public/css')
   .options({
     postCss: [
       require('postcss-import'),
       require('postcss-css-variables'),
       require('postcss-conditionals'),
       require('postcss-custom-media'),
       require('css-mqpacker'),
       require('autoprefixer')
     ]
   })
