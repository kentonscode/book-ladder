var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var mocha = require('gulp-mocha');

gulp.task('test', function() {
  return gulp.src('test.js', {read: false})
  .pipe(mocha({reporter: 'landing'}));
});

gulp.task('nodemon', function() {
  nodemon({
    script: 'app.js',
  })
  .on('start', ['test.js']);
});

gulp.task('default', ['nodemon']);
