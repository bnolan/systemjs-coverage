// && ./node_modules/.bin/remap-istanbul -i ./coverage/coverage-final.json -o ./coverage/html-report -t html"

var Builder = require('systemjs-builder');
var gulp = require('gulp');

gulp.task('default', function (cb) {
  var builder = new Builder();

  builder.loadConfig('./config.js')
    .then(function () {
      return builder.buildStatic('src/test.ts', {
        sourceMaps: true
      });
    })
    .then(function (output) {
      console.log(output);
      console.log('Build complete');
      cb();
    })
});
