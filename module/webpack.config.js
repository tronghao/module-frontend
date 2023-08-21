const { resolve } = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  entry: resolve(__dirname, "./index.js"),
  output: {
    path: resolve(__dirname, "dist"),
    filename: "index.js",
  },
  plugins: [
    new UglifyJsPlugin({
      exclude: [/\.min\.js$/gi], // skip pre-minified libs
    }),
  ],
};
