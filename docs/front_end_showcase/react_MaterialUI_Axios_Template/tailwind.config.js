  // tailwind.config.js
  module.exports = {

    purge: [
 
      './src/**/*.html',
 
      './src/**/*.js',
      './src/**/*/**.js',
      './src/**/**.js',
      './src/**/**/*.js',
      './src/components/*'
    ],
     darkMode: false, // or 'media' or 'class'
     theme: {
       extend: {},
     },
     variants: {},
     plugins: [],
   }