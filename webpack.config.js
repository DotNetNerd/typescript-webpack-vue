//const { CheckerPlugin } = require('awesome-typescript-loader')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: {
    app: "./src/client/app.ts"
  },
  output: {
    filename: '[name]-[hash].js',
    path: __dirname + '/dist/client'
  },

  devtool: 'source-map',  
  devServer: {
    contentBase: './dist'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },  
  devtool: 'source-map',  
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        oneOf: [
          // this matches `<style module>`
          {
            resourceQuery: /module/,
            use: [
              'vue-style-loader',
              {
                loader: 'css-loader',
                options: {
                  modules: true,
                  localIdentName: '[local]_[hash:base64:5]'
                }
              }
            ]
          },
          // this matches plain `<style>` or `<style scoped>`
          {
            use: [
              'vue-style-loader',
              'css-loader'
            ]
          }
        ]
      }
    ]
  },
  plugins: [
      //new CheckerPlugin(),
    new CleanWebpackPlugin(['dist/client/*'], {
      root: __dirname + '/'
    }),
    new HtmlWebpackPlugin({ chunks: ['app'], /*template: './src/layout.html',*/ filename: 'index.html' }),
    new VueLoaderPlugin()
  ]
};

if (process.env.NODE_ENV === 'production') {
  module.exports.plugins.push(new UglifyJSPlugin());
}