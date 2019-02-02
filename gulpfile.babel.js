'use strict'

import gulp from 'gulp';
import browserSync from 'browser-sync';

const rootDir = `./`
const path = {
    all : `${rootDir}*`,
    html : `${rootDir}**/*.html`,
    styles : {
        src : `${rootDir}assets/styles/scss/**/*.scss`,
        dest : `${rootDir}assets/styles/css`
    }
};

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

const watch = () => gulp.watch(path.html,reload);

export default gulp.series(serve, watch);
