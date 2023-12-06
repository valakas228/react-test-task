/* eslint-disable no-undef */
const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

gulp.task("sass", function () {
  return gulp
    .src("./src/styles/styles.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./src/styles"));
});

gulp.task("watch", function () {
  gulp.watch("*.scss", gulp.series("sass"));
});

gulp.task("default", gulp.series("sass", "watch"));
