import * as gulp from 'gulp';
// @ts-ignore
import * as changedInPlace from 'gulp-changed-in-place';
// @ts-ignore
import * as project from '../aurelia.json';
import { build } from 'aurelia-cli';
// @ts-ignore
const sass = require('gulp-sass');
// @ts-ignore
const gulpCopy = require('gulp-copy');

export default function processCSS() {
  return gulp
    .src(project.cssProcessor.source)
    .pipe(changedInPlace({ firstPass: true }))
    .pipe(build.bundle());
}

export function pluginCSSCommon() {
  return gulp
    .src(project.plugin.source.css)
    .pipe(gulp.dest(project.plugin.output + '/commonjs'));
}

export function pluginCSSAMD() {
  return gulp
    .src(project.plugin.source.css)
    .pipe(gulp.dest(project.plugin.output + '/amd'));
}
export function pluginCSSSystem() {
  return gulp
    .src(project.plugin.source.css)
    .pipe(gulp.dest(project.plugin.output + '/system'));
}
export function pluginCSSES2015() {
  return gulp
    .src(project.plugin.source.css)
    .pipe(gulp.dest(project.plugin.output + '/es2015'));
}

export function pluginScssCommon() {
  return gulp
    .src(project.plugin.source.scss)
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest(project.plugin.output + '/commonjs'));
}

export function pluginScssAMD() {
  return gulp
    .src(project.plugin.source.scss)
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest(project.plugin.output + '/amd'));
}
export function pluginScssSystem() {
  return gulp
    .src(project.plugin.source.scss)
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest(project.plugin.output + '/system'));
}
export function pluginScssES2015() {
  return gulp
    .src(project.plugin.source.scss)
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest(project.plugin.output + '/es2015'));
}

export function pluginCopyScssFilesCommon() {
  return gulp
    .src(project.plugin.source.scss)
    .pipe(gulpCopy(project.plugin.output + '/commonjs', { prefix: 2 }));
}

export function pluginCopyScssFilesAMD() {
  return gulp
    .src(project.plugin.source.scss)
    .pipe(gulpCopy(project.plugin.output + '/amd', { prefix: 2 }));
}
export function pluginCopyScssFilesSystem() {
  return gulp
    .src(project.plugin.source.scss)
    .pipe(gulpCopy(project.plugin.output + '/system', { prefix: 2 }));
}
export function pluginCopyScssFilesES2015() {
  return gulp
    .src(project.plugin.source.scss)
    .pipe(gulpCopy(project.plugin.output + '/es2015', { prefix: 2 }));
}
