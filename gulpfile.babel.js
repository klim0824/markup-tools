'use strict';

import gulp from 'gulp';
import sass from 'gulp-sass';
import browserSync from 'browser-sync';

const path = {
    root : `./`,
    all : `${root}*`,
    styles : {
        src : `${root}assets/styles/scss/**/*.scss`,
        dest : `${root}assets/styles/css`
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
            baseDir: path.root
        }
    });
    done;
};

const watch = () => gulp.watch(path.all,reload);

export default gulp.series(style, watch, serve);
