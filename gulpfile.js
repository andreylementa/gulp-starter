const { watch, series, parallel } = require("gulp");

const browserSync = require("browser-sync").create();

// Конфигурация
const path = require("./config/path.js");

// Задачи
const clear = require("./task/clear.js");
const html = require("./task/html.js");
const scss = require("./task/scss.js");
const js = require("./task/js.js");
const img = require("./task/img.js");
const font = require("./task/font.js");

// Удаление директории

// Сервер
const server = () => {
  browserSync.init({
    server: {
      baseDir: path.root,
    },
  });
};

// Наблюдение
const watcher = () => {
  watch(path.html.watch, html).on("all", browserSync.reload);
  watch(path.scss.watch, scss).on("all", browserSync.reload);
  watch(path.js.watch, js).on("all", browserSync.reload);
  watch(path.img.watch, img).on("all", browserSync.reload);
  watch(path.font.watch, font).on("all", browserSync.reload);
};

// Задачи
exports.html = html;
exports.js = js;
exports.scss = scss;
exports.img = img;
exports.font = font;

//Сборка
exports.dev = series(
  clear,
  parallel(scss, html, js, img, font),
  parallel(server, watcher)
);
