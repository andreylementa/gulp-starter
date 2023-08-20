const imagemin = require("gulp-imagemin");

module.exports = {
  webpack: {
    mode: "production",
  },

  imagemin: {
    verbose: true,
  },

  fonter: {
    formats: ["ttf", "woff", "eot", "svg"],
  },
};
