'use strict';

import gulp from 'gulp';
import browserSync from 'browser-sync';

const path = {
    src : {
        root : `./src`,
        all : `./src/*`,
        assets : {
            documents : `./src/assets/documents`,
            fonts : `./src/assets/fonts`,
            images : `./src/assets/images`,
            scripts : `./src/assets/scripts`,
            styles : `./src/assets/styles`
        }
    },
    dest : {
        root : `./dest`,
        all : `./dest/*`,
        assets : {
            documents : `./dest/assets/documents`,
            fonts : `./dest/assets/fonts`,
            images : `./dest/assets/images`,
            scripts : `./dest/assets/scripts`,
            styles : `./dest/assets/styles`
        }
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
            baseDir: path.dest.root
        }
    });
    done();
};

const watch = () => gulp.watch([path.src.all],reload);

export default gulp.series(serve, watch);