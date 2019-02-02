'use strict';

import gulp from 'gulp';
import sass from 'gulp-sass';
import browserSync from 'browser-sync';

const rootDir = `./`
const path = {
    all : `${rootDir}*`,
    styles : {
        src : `${rootDir}assets/styles/scss/**/*.scss`,
        dest : `${rootDir}assets/styles/css`
    }
};

const style = () =>{
    return gulp.src(path.styles.src)
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(gulp.dest(path.styles.dest))
}

const server = browserSync.create();
const reload = (done) => {
    server.reload();
    done;
};
const serve = (done) => {
    server.init({
        server: {
            baseDir: rootDir
        }
    });
    done;
};

const watch = () => gulp.watch(path.all,reload);

export default gulp.series(style, serve, watch);
