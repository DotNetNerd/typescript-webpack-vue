//const { CheckerPlugin } = require('awesome-typescript-loader')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    app: "./src/client/app.ts"
  },
  output: {
    filename: '[name]-[hash].js',
    path: __dirname + '/dist/client'
},

devtool: 'source-map',  
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },

  
  devtool: 'source-map',  
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('typings-for-css-modules-loader?modules&namedExport&minimize' + (process.env.NODE_ENV === 'production' ? '&minimize' : ''))
      }
    ]
  },
  plugins: [
      //new CheckerPlugin(),
    new CleanWebpackPlugin(['dist/client/*'], {
      root: __dirname + '/'
    }),
    new HtmlWebpackPlugin({ chunks: ['app'], /*template: './src/layout.html',*/ filename: 'index.html' }),
  ]
};

if (process.env.NODE_ENV === 'production') {
  module.exports.plugins.push(new UglifyJSPlugin());
}