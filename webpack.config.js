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
  devtool: "eval",
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
    host: "localhost",
    server: "http",
    static: {
      directory: path.resolve(__dirname, "public"),
      watch: true,
    },
    watchFiles: [path.resolve(__dirname, "src")],
    client: {
      reconnect: false,
      overlay: {
        errors: true,
      },
      logging: "none",
    },
    port: 3000,
    open: true,
    hot: true,
    liveReload: true,
    devMiddleware: {
      serverSideRender: true,
    },
  },
  //Stats
  stats: "minimal",
  // target
  target: "web",
};
