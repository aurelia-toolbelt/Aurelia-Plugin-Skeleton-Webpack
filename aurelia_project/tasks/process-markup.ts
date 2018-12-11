import * as gulp from 'gulp';
// @ts-ignore
import * as changedInPlace from 'gulp-changed-in-place';
// @ts-ignore
import * as project from '../aurelia.json';
import {build} from 'aurelia-cli';

export default function processMarkup() {
  return gulp.src(project.markupProcessor.source)
    .pipe(changedInPlace({firstPass:true}))
    .pipe(build.bundle());
}

export function pluginMarkup() {
  return gulp.src(project.plugin.source.html)
    .pipe(gulp.dest(project.plugin.output));
}
