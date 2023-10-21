const path = require("path");

module.exports = {
  target: "webworker",
  mode: "development",
  devtool: "source-map",
  // mode: "production",
  // entry: ["./src/index.js", "./src/DefaultBackend.js"],
  output: {
    // filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    filename: "lightning-fs.min.js",
    library: "LightningFS",
    libraryTarget: "umd",
  },
  resolve: {
    fallback: {
      zlib: require.resolve("browserify-zlib"),
      fs: false,
      net: false,
      tls: false,
      https: false,
      http: false,
      stream: false,
      crypto: false,
    },
  },
};
