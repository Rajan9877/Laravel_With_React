let mix = require('laravel-mix');

mix.options({
  postCss: [
      require('autoprefixer'),
  ],
});

mix.setPublicPath('public');

mix.webpackConfig({
  resolve: {
      extensions: ['.js', '.vue'],
      alias: {
          '@': __dirname + 'resources'
      }
  },
  output: {
      chunkFilename: 'js/chunks/[name].js',
  },
}).react();

mix.js('resources/my-react-app/src/index.js', 'public/js/app.js').version();
mix.copy('resources/my-react-app/public', 'public');


  
  
  
  
  
  