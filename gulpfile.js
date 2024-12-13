var gulp = require('gulp');
const minify = require('gulp-minify');
 
gulp.task('compress', function() {
  return gulp.src(['lib/*.js', 'lib/*.mjs'])
    .pipe(minify({
      ext:{
          src:'.js',
          min:'.min.js'
      },
      //noSource:true
  }))
    .pipe(gulp.dest('dist'))
});