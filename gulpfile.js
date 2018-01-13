var css = [
	'./theme/normalize.css',
	'./theme/base.css',
	'./theme/utilities.css',
	'./theme/common.css',
	'./theme/links.css',
	'./theme/content.css',
	'./theme/buttons.css',
	'./theme/cp.css',
	'./theme/forms.css',
	'./theme/icons.css',
	'./theme/colours.css',
	'./theme/bidi.css',
	'./theme/responsive.css',
	'./theme/tweaks.css',
	'./theme/extremedarkred.css'
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
	.pipe(gulp.dest('./theme/'));
});

gulp.task('default',['minify-css']);

gulp.task('watch', function() {
	gulp.watch(css, ['minify-css']);
});
