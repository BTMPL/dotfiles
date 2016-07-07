module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: __dirname + "/dist/js",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.tsx$/,
        exclude: /(node_modules)/,
        loader: "ts-loader"
      }
    ]
  }
};
