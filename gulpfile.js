const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const cssPurge = require('gulp-css-purge');
const moduleImporter = require('sass-module-importer');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('reactor-blocks', () => {
  gulp.src(['./src/styles/index.scss'])
    .pipe(sass({ importer: moduleImporter() }).on('error', sass.logError))
    .pipe(cssPurge())
    .pipe(autoprefixer({ cascade: false }))
    .pipe(rename({ basename: 'reactor-blocks' }))
    .pipe(gulp.dest('./package/styles'));
});

gulp.task('reactor-blocks:min', () => {
  gulp.src(['./package/styles/reactor-blocks.css'])
    .pipe(sass({ importer: moduleImporter(), outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(rename({ basename: 'reactor-blocks', suffix: '.min' }))
    .pipe(gulp.dest('./package/styles'));
});

gulp.task('stylesheets', [
  'reactor-blocks'
]);

gulp.task('stylesheets:min', [
  'reactor-blocks:min'
]);

gulp.task('watch', function() {
  gulp.watch('./src/**/*.scss', ['stylesheets']);
});
