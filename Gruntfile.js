module.exports = function(grunt) {

function loadConfig(path) {
  var glob = require('glob'),
      object = {},
      key;
 
  glob.sync('*', {cwd: path}).forEach(function(option) {
    key = option.replace(/\.js$/,'');
    object[key] = require(path + option);
  });
 
  return object;
}

var config = {
  pkg: grunt.file.readJSON('package.json'),
  env: process.env,
};

grunt.util._.extend(config, loadConfig('./_grunt/'));
grunt.initConfig(config); 


// load plugins
require('load-grunt-tasks')(grunt);

// Custom tasks
grunt.registerTask('default', ['shell:downloadLatestTweet', 'shell:interpolateEnvVariables', 'shell:jekyllBuildContentful', 'shell:removeAPIKeys', 'browserSync', 'watch']);
};
