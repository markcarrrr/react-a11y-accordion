const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: 'html-loader',
        test: /\.html$/
      },
      {
        exclude: /node_modules/,
        loader: 'ts-loader',
        test: /\.(ts|tsx)$/
      }
    ]
  },
  entry: './examples',
  plugins: [
    new HtmlWebPackPlugin({
      filename: './index.html',
      template: './examples/index.html'
    })
  ],
  resolve: {
    extensions: ['.css', '.js', '.jsx', '.ts', '.tsx']
  }
};
