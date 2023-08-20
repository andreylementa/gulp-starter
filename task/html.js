const { src, dest } = require("gulp");
const browserSync = require("browser-sync").create();

// Конфигурация
const path = require("../config/path.js");

// Плагины
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const fileInclude = require("gulp-file-include");
const htmlmin = require("gulp-htmlmin");
const size = require("gulp-size");
const webpHtml = require("gulp-webp-html");

// Обработка HTML
const html = function () {
  return src(path.html.src)
    .pipe(
      plumber({
        errorHandler: notify.onError((error) => ({
          title: "HTML",
          message: error.message,
        })),
      })
    )
    .pipe(fileInclude())
    .pipe(webpHtml())
    .pipe(size({ title: "До сжатия" }))
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(size({ title: "После сжатия" }))
    .pipe(dest(path.html.dest))
    .pipe(browserSync.stream());
};

module.exports = html;
