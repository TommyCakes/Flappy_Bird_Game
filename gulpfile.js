// var gulp = require('gulp');
//
// var concat = require('gulp-concat');
// var minifyHTML = require('gulp-minify-html');
// var imagemin = require('gulp-imagemin');
// var browserify = require('browserify');
// var jshint = require('gulp-jshint');
// var rename = require('gulp-rename');
// var sass = require('gulp-sass');
// var uglify = require('gulp-uglify');
// var browserSync = require('browser-sync').create();
//
//
// // Static Server + watching scss/html files
// gulp.task('serve', ['sass'], function() {
//
//     browserSync.init({
//         server: "./site"
//     });
//
//     gulp.watch("site/scss/*.scss", ['sass']);
//     gulp.watch('site/js/*.js', ['jshint']);
//     gulp.watch("site/*.html").on('change', browserSync.reload);
// });
//
//
// // JavaScript linting task
// gulp.task('jshint', function() {
//   return gulp.src('site/js/*.js')
//     .pipe(jshint())
//     .pipe(jshint.reporter('default'));
// });
//
// // Compile Sass task
// gulp.task('sass', function() {
//   return gulp.src('site/scss/*.scss')
//     .pipe(sass({
//       includePaths: require('node-bourbon').includePaths,
//       includePaths: require('node-neat').includePaths
//     }))
//     .pipe(gulp.dest('site/css'))
//     .pipe(browserSync.stream());
// });
//
// // Minify index
// gulp.task('html', function() {
//   return gulp.src('site/index.html')
//     .pipe(minifyHTML())
//     .pipe(gulp.dest('build/'));
// });
//
// // JavaScript build task, removes whitespace and concatenates all files
// gulp.task('scripts', function() {
//   return browserify('site/js/*.js')
//     .bundle()
//     .pipe(concat('app.js'))
//     .pipe(uglify())
//     .pipe(gulp.dest('./build/js'));
// });
//
// // Styles build task, concatenates all the files
// gulp.task('styles', function() {
//   return gulp.src('site/css/*.css')
//     .pipe(concat('styles.css'))
//     .pipe(gulp.dest('build/css'));
// });
//
// // Image optimization task
// gulp.task('images', function() {
//   return gulp.src('site/images/*')
//     .pipe(imagemin())
//     .pipe(gulp.dest('build/img'));
// });
//
// // Watch task
// // gulp.task('watch', function() {
//
// //   gulp.watch('site/scss/*.scss', ['sass']);
// // });
//
// // Default task
// gulp.task('default', ['jshint', 'sass', 'watch']);
//
// // Build task
// gulp.task('build', ['jshint', 'sass', 'html', 'scripts', 'styles', 'images']);
//
//
// //!!git subtree push --prefix build origin gh-pages
// // Add just teh build to gh-pages!!
var gulp = require('gulp');

var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

// JavaScript build task, removes whitespace and concatenates all files
gulp.task('scripts', function() {
  return browserify('./site/js/main.js')
    .bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(gulp.dest('./site/js'));
});

// Watch task
gulp.task('watch', function() {
  gulp.watch(['./site/js/**/*.js', '!./site/js/app.js'], ['scripts']);
});

gulp.task('default', ['scripts', 'watch']);
