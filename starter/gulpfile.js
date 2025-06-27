import gulp from "gulp";
import shell from "gulp-shell";

gulp.task("default", shell.task(["npx parcel index.html"]));
gulp.task("test", shell.task(["npx mocha"]));
gulp.task("e2e", shell.task(["npx cypress run"]));
