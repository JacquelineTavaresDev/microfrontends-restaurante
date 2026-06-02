const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: "./src/index.js",

  output: {
    publicPath: "auto"
  },

  devServer: {
    port: 3000,
    historyApiFallback: true
  },

  module: {
  rules: [
    {
      test: /\.jsx?$/,
      loader: "babel-loader",
      exclude: /node_modules/
    },
    {
      test: /\.css$/,
      use: [
        "style-loader",
        "css-loader"
      ]
    }
  ]
},

  resolve: {
    extensions: [".js", ".jsx"]
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "container",

      remotes: {
        cardapio:
          "cardapio@http://localhost:3001/remoteEntry.js",

        pedido:
          "pedido@http://localhost:3002/remoteEntry.js"
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
