const { src, dest } = require("gulp");

// Конфигурация
const path = require("../config/path.js");
const app = require("../config/app.js");

// Плагины
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const imagemin = require("gulp-imagemin");

// Обработка JavaScript
const img = function () {
  return src(path.img.src)
    .pipe(
      plumber({
        errorHandler: notify.onError((error) => ({
          title: "Image",
          message: error.message,
        })),
      })
    )
    .pipe(imagemin(app.imagemin))
    .pipe(dest(path.img.dest));
};

module.exports = img;
