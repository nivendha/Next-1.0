var gulp = require('gulp'),
    concat = require('gulp-concat'),
    plumber = require('gulp-plumber'),
    insert = require('gulp-insert'),
    ejs = require('gulp-ejs-precompiler');
/*  usemin = require('gulp-usemin'),
    wrap = require('gulp-wrap'),
    connect = require('gulp-connect'),
    watch = require('gulp-watch'),
    minifyCss = require('gulp-minify-css'),
    minifyJs = require('gulp-uglify'),
    less = require('gulp-less'),
    rename = require('gulp-rename'),
    minifyHTML = require('gulp-minify-html');*/
var resPath='next/resources/materialize/';
var paths = {
    scripts: 'js/**/*.*',
    styles: 'less/**/*.*',
    images: 'img/**/*.*',
    templates: 'templates/**/*.nxt',
    plugins:'plugins/**/*.*',
};
var destPath='app/public/builder/';
var dest={
    templates: 'templates',
}
/*
*precompile templates EJS
*/

gulp.task('ejs', function() {
    return gulp.src(resPath+paths.templates)
        .pipe(plumber())
        .pipe(ejs({
            compileDebug: true,
            client: true
        }))
        .pipe(concat('templates.js'))
        .pipe(insert.prepend('window.templates = {};'+"\n"))
        .pipe(gulp.dest(destPath+dest.templates));
});
/**
 * Handle bower components from index
 */
/*gulp.task('usemin', function() {
    return gulp.src(paths.index)
        .pipe(usemin({
            js: ['concat'],
            css: ['concat'],
        }))
        .pipe(gulp.dest('dist/'));
});*/

/**
 * Copy assets
 */
/*gulp.task('build-assets', ['copy-bower_fonts']);

gulp.task('copy-bower_fonts', function() {
    return gulp.src(paths.bower_fonts)
        .pipe(rename({
            dirname: '/fonts'
        }))
        .pipe(gulp.dest('dist/lib'));
});*/

/**
 * Handle custom files
 */
/*gulp.task('build-custom', ['custom-images', 'custom-js', 'custom-less', 'custom-templates']);

gulp.task('custom-images', function() {
    return gulp.src(paths.images)
        .pipe(gulp.dest('dist/img'));
});

gulp.task('custom-js', function() {
    return gulp.src(paths.scripts)
       
        .pipe(concat('script.min.js'))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('custom-less', function() {
    return gulp.src(paths.styles)
        .pipe(less())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('custom-templates', function() {
    return gulp.src(paths.templates)
        .pipe(minifyHTML())
        .pipe(gulp.dest('dist/templates'));
});*/


/**
 * Watch custom files
 */
/*gulp.task('watch', function() {
    gulp.watch([paths.images], ['custom-images']);
    gulp.watch([paths.styles], ['custom-less']);
    gulp.watch([paths.scripts], ['custom-js']);
    gulp.watch([paths.templates], ['custom-templates']);
    gulp.watch([paths.index], ['usemin']);
});*/

/**
 * Live reload server
 */
/*gulp.task('webserver', function() {
    connect.server({
        root: 'dist',
        livereload: false,
        port: process.env.PORT || 8800
    });
});*/

/**
 * Gulp tasks
 */
//gulp.task('build', ['usemin', 'build-assets', 'build-custom']);
//gulp.task('default', ['build', 'webserver', 'watch']);
