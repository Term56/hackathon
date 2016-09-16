'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 
gulp.task('sass', function () {
  return gulp.src('./Content/css/sass/bootsrap/stylesheets/_bootstrap.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./Content/css/style.css'));
});