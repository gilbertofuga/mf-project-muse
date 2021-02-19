const path = require("path");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");
const { merge } = require("webpack-merge");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "untitle-react-mf.js",
    publicPath: "",
  },
  devtool: "source-map",
  mode: "development",
  externals: [/^rxjs\/?.*$/],
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        include: [/node_modules/, /src/],
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: { modules: false },
          },
        ],
      },
    ],
  },
  plugins: [
    new WebpackManifestPlugin({
      fileName: "asset-manifest.json",
    }),
  ],
};
