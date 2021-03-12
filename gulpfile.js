const gulp = require('gulp');
// const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const del = require('del');
const browserSync = require('browser-sync');
const imagemin = require('gulp-image');

function css(){
    return gulp.src('./css/**/*.css')
    .pipe(cleanCSS({
        level: 2
      }))
      .pipe(gulp.dest('./build/css'))
      .pipe(browserSync.stream())
}

function js(){
    return gulp.src('./js/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/js'))
    .pipe(browserSync.stream())
}

function imgmin(){
    return gulp.src('./img/**')
    .pipe(imagemin({
        progressive: true
    }))
    .pipe(gulp.dest('./build/img'))

}

function clean(){
    return del(['build/*'])
}

function watch(){
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch('./img/**', imgmin)
    gulp.watch('./css/**/*.css', css)
    gulp.watch('./js/**/*.js', js)
    gulp.watch("./*.html").on('change', browserSync.reload);
}

gulp.task('css', css);
gulp.task('js', js);
gulp.task('del', clean);
gulp.task('img', imgmin);
gulp.task('watch', watch);
gulp.task('build', gulp.series(clean, gulp.parallel(css,js,imgmin)));
gulp.task('dev', gulp.series('build','watch'));