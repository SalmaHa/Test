const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry:  "./src/index.js",
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    // publicPath:'/i2vpn/dashboard/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader'},
      },
      {
        test: /\.css$/,
        use: [ 'style-loader' , 'css-loader' ]
      },      
      {
        test: /\.scss$/,
        use: ["style-loader","css-loader", "sass-loader"]
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2|otf)$/,
        loader: 'url-loader'
      }
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    host: 'localhost',
    port: '3000',
    historyApiFallback: true,
    inline: true,
    compress: true,   
    open: true,
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html'
    }),
    new Dotenv()
  ],
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  }
};