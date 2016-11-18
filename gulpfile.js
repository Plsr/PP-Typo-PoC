var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function(){
  return gulp.src('src/styles/**/*.sass')
    .pipe(sass()) // Using gulp-sass
    .pipe(autoprefixer({
            browsers: ['last 2 versions', 'ie >= 9', 'and_chr >= 2.3'],
            cascade: false
    }))
    .pipe(gulp.dest('src'))
});

gulp.task('watch', function() {
  gulp.watch('src/styles/**/*.sass', ['sass']);
})