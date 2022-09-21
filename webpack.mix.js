const mix = require('laravel-mix');

mix.scripts([
   'resources/js/bootstrap.bundle.min.js',
   'resources/js/my-script.js',
], 'public/js/my-app.js').version();

mix.styles([
   'resources/css/bootstrap.min.css',
   'resources/css/my-style.css',
], 'public/css/my-app.css').version();

