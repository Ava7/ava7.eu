var gulp = require('gulp'),
    minifyCss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat');

gulp.task('css', function() {
    gulp.src([
            './bower_components/normalize-css/normalize.css',
            './bower_components/components-font-awesome/css/font-awesome.min.css',
            './assets/css/app.css',
        ]).pipe(minifyCss())
        .pipe(concat('style.css'))
        .pipe(gulp.dest('public/'))
})

gulp.task('fonts', function() {
    gulp.src([
            './bower_components/components-font-awesome/fonts/*',
        ]).pipe(gulp.dest('public/fonts/'))
})

gulp.task('js', function() {
    gulp.src([
        './assets/js/*.js'
        ]).pipe(uglify())
        .pipe(concat('app.js'))
        .pipe(gulp.dest('public/'))
})

gulp.task('default', ['css', 'fonts', 'js'])
