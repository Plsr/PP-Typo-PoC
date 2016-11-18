var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
  return gulp.src('src/styles/**/*.sass')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('src'))
});

gulp.task('watch', function() {
  gulp.watch('src/styles/**/*.sass', ['sass']);
})