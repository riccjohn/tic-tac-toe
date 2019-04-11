const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/App.tsx",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        use: { loader: "awesome-typescript-loader" }
      },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  },
  // resolve: { extensions: ["*", ".js", ".jsx"] },
  resolve: { extensions: [".ts", ".tsx", ".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: 3000,
    publicPath: "http://localhost:3000/dist/",
    hotOnly: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devtool: "source-map"
};
