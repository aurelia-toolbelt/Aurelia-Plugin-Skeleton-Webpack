import * as gulp from 'gulp';
// @ts-ignore
import * as changedInPlace from 'gulp-changed-in-place';
// @ts-ignore
import * as project from '../aurelia.json';
import {build} from 'aurelia-cli';

export default function processCSS() {
  return gulp.src(project.cssProcessor.source)
    .pipe(changedInPlace({firstPass:true}))
    .pipe(build.bundle());
};

export function pluginCSSCommon() {
  return gulp.src(project.plugin.source.css)
    .pipe(gulp.dest(project.plugin.output + "/commonjs"));
}

export function pluginCSSAMD() {
  return gulp.src(project.plugin.source.css)
    .pipe(gulp.dest(project.plugin.output + "/amd"));
}
export function pluginCSSSystem() {
  return gulp.src(project.plugin.source.css)
    .pipe(gulp.dest(project.plugin.output + "/system"));
}
export function pluginCSSES2015() {
  return gulp.src(project.plugin.source.css)
    .pipe(gulp.dest(project.plugin.output + "/es2015"));
}
