'use strict';

import gulp from 'gulp';
import sass from 'gulp-sass';
import browserSync from 'browser-sync';

const path = {
    root : `./`,
    all : `./*`,
    assets : {
        all : `./*`,
        documents : `./assets/documents`,
        fonts : `./assets/fonts`,
        images : `./assets/images`,
        scripts : `./assets/scripts`,
        styles : {
            css : `./assets/styles/css`,
            scss : `./assets/styles/scss`
        }
    }
};

const style = () =>{
    return gulp.src(path.assets.styles.scss + '/*.scss')
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(gulp.dest(path.assets.styles.css))
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

export default gulp.series(style, serve, watch);
