const { src, dest } = require("gulp");

const browserSync = require("browser-sync").create();

// Плагины
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");

const pugs = require("gulp-pug");

// Обработка PUG
const pug = function () {
  return src("./src/pug/*.pug")
    .pipe(
      plumber({
        errorHandler: notify.onError((error) => ({
          title: "pug",
          message: error.message,
        })),
      })
    )
    .pipe(pugs({ pretty: true }))
    .pipe(dest("./public"))
    .pipe(browserSync.stream());
};

module.exports = pug;
