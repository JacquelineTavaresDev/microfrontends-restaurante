const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: "./src/index.js",

   output: {
    publicPath: "auto"
  },

  devServer: {
    port: 3002,
    historyApiFallback: true,
    headers: {
    "Access-Control-Allow-Origin": "*"
    }
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },

  resolve: {
    extensions: [".js", ".jsx"]
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "pedido",
      filename: "remoteEntry.js",

      exposes: {
        "./Pedido": "./src/App"
      },

      shared: {
        react: {
          singleton: true,
          requiredVersion: false
        },
        "react-dom": {
          singleton: true,
          requiredVersion: false
        }
      }
    }),

    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ]
};
