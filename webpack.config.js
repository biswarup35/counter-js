const path = require("path");
const HtmlwebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  entry: {
    main: path.resolve(__dirname, "src/app.js"),
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name].[contenthash].js",
    clean: true,
  },
  devtool: "inline-source-map",
  //loaders
  module: {
    rules: [
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, "src"),
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(svg|png|webp|jpg|jpeg|gif)$/,
        type: "asset/resoursce",
      },
      //js X Babel
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },

  //plugins
  plugins: [
    new HtmlwebpackPlugin({
      title: "Welcome",
      filename: "index.html",
      template: path.resolve(__dirname, "src/index.html"),
    }),
  ],
  // dev-server
  devServer: {
    static: {
      directory: path.resolve(__dirname, "public"),
    },
    watchFiles: [path.resolve(__dirname, "src")],
    port: 3000,
    open: true,
    hot: true,
  },
  //Stats
  stats: "minimal",
};
