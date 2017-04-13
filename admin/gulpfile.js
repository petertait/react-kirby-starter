'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var connect = require('gulp-connect-php');

var reload = browserSync.reload;

var configs = {
  connect: {
    hostname: 'localhost',
    port: '3000',
    base: '.',
    stdio: 'ignore'
  }
};

gulp.task('serve', function () {
  connect.server(configs.connect, function () {
    browserSync({proxy: configs.connect.hostname + ':' + configs.connect.port});
  });
  gulp.watch([
    'site/**/*.php'
  ]).on('change', reload);
});
