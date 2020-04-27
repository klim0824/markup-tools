'use strict'

import gulp from 'gulp';
import pug from 'gulp-pug';
import sass from 'gulp-sass';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import header from 'gulp-header';
import replace from 'gulp-replace';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import cleanCss from 'gulp-clean-css';
import rename from 'gulp-rename';
import browserSync from 'browser-sync';

const rootDir = `.`
const path = {
    all : `${rootDir}/*`,
    html : `${rootDir}/**/*.html`,
    styles : {
        src : `${rootDir}/scss/**/*.scss`,
        dest : `${rootDir}/css`
    }
};

const style = () =>{
    return gulp.src(path.styles.src,{sourcemaps: true})
    .pipe(plumber({errorHandler: notify.onError('<%= error.message %>')}))
    .pipe(sass({
        outputStyle: 'expanded'
    }))
    .pipe(replace(/@charset "UTF-8";/g, ''))
    .pipe(header('@charset "UTF-8";\n\n'))
    .pipe(postcss([
        autoprefixer()
    ]))
    .pipe(gulp.dest(path.styles.dest,{sourcemaps:'./'}))
    // .pipe(cleanCss())
    // .pipe(rename({extname: '.min.css'}))
    // .pipe(gulp.dest(path.styles.dest,{sourcemaps:'./'}))
}

const server = browserSync.create();
const reload = (done) => {
    server.reload();
    done();
};
const serve = (done) => {
    server.init({
        server: {
            baseDir: rootDir
        }
    });
    done();
};

const watch = () => {
    gulp.watch(path.styles.src, style)
    gulp.watch([
        path.html,
        path.styles.dest + '/*.css'
    ],reload)
};

export default gulp.series(serve, watch);
