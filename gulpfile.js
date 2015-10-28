var gulp = require('gulp');

gulp.task('default', function (cb) {
  var Builder = require('systemjs-builder');
  var builder = new Builder();
  builder.reset();

  builder.loadConfig('./config.js')
    .then(function () {
      return builder.build('test/test.ts', 'build/build.js');
    })
    .then(function () {
      console.log('Build complete');
      cb();
    })
    .catch(function (err) {
      console.log(err);
      cb(err);
    });
});
