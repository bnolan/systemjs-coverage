// && ./node_modules/.bin/remap-istanbul -i ./coverage/coverage-final.json -o ./coverage/html-report -t html"

var Builder = require('systemjs-builder');
var gulp = require('gulp');
var Builder = require('systemjs-builder');

gulp.task('default', function (cb) {
  var builder = new Builder();

  builder.loadConfig('./config.js')
    .then(function () {
      return builder.bundle('src/test', {
        sourceMaps: true
      });
    })
    .then(function (output) {
      console.log(output.source);
      console.log(output.sourceMap);
      console.log('Build complete');
      cb();
    })
});
