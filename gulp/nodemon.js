var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('nodemon', function() {
  nodemon({
    script: 'server.js',
  })
  .on('start', ['test']);
});