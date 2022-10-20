const { src, dest, series, watch } = require("gulp");
const prefix = require("gulp-autoprefixer");
const sass = require("gulp-sass")(require("sass"));

const buildStyles = () => {
  return src("sass/**/*.sass")
  .pipe(sass({outputStyle: "compressed"}))
  .pipe(prefix("last 2 versions"))
  .pipe(dest("css/"))
};

const watchTasks = () => {
  return watch("sass/**/*.sass", buildStyles);
}

exports.default = series(buildStyles, watchTasks);