'use strict';
var gulp = require('gulp');
var config = require('./config');

function watch() {
    gulp.watch(config.src.scripts, ['lint', 'test']);
}

watch.depends = ['lint', 'test', 'serve'];

module.exports = watch;
