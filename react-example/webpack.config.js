// webpack needs to be explicitly required
const webpack = require("webpack");
const dotenv = require("dotenv");
// import webpack from 'webpack' // (if you're using ESM)

// this will update the process.env with environment variables in .env file
dotenv.config();

module.exports = {
  /* ... rest of the config here ... */
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
        resolve: {
          fullySpecified: false,
        },
      },
    ],
  },

  plugins: [
    // fix "process is not defined" error:
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
    new webpack.DefinePlugin({
      "process.env": JSON.stringify("production"),
    }),
    new dotenv(),
  ],
};
