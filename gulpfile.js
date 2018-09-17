'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

var nunjucksRender = require('gulp-nunjucks-render');
 
gulp.task('sass', function () {
  return gulp.src('src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('build/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('src/sass/**/*.scss', ['sass']);
});

gulp.task('nunjucks', function() {
  return gulp.src('src/templates/**/*.+(html|njk)')
  .pipe(nunjucksRender({
      path: ['src/templates']
    }))
  .pipe(gulp.dest('build'))
});

gulp.task('default', [ 'sass', 'nunjucks' ]);