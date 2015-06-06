var nightwatch = require('./lib/index.js');

module.exports = function(grunt) {

  'use strict';

  nightwatch.initGrunt(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

  
      gruntfile: {
        src: 'Gruntfile.js'
      },

    nightwatch: {
      options: {
        cwd: './'
      },

      'default' : {},

      browserstack: {
        argv: {
          env: 'browserstack'
        },
        settings: {
          silent: true
        }
      }
    }

  });
  
};
