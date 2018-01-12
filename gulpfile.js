var css = [
	'./extremedarkred/theme/stylesheet.css'
];
 
var gulp = require('gulp');
 
var watch = require('gulp-watch');
 
var cssmin = require("gulp-cssmin");
 
var concat = require("gulp-concat");
 
var stripCssComments = require('gulp-strip-css-comments');
 
gulp.task('minify-css', function(){
	gulp.src(css)
	.pipe(concat('stylesheet.min.css'))
	.pipe(stripCssComments({all: true}))
	.pipe(cssmin())
	.pipe(gulp.dest('./extremedarkred/theme/'));
});
 
gulp.task('default',['minify-css']);
 
gulp.task('watch', function() {
	gulp.watch(css, ['minify-css']);
});
