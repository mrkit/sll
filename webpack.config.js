const r = require('path').resolve,
      UglifyJSPlugin = require('uglifyjs-webpack-plugin'),
      ExtractTextPlugin = require('extract-text-webpack-plugin'),
      webpack = require('webpack');

const config = {
  mode: 'development',
  entry: './client/index.js',
  output: {
    filename: 'bundle.js',
    path: r(__dirname, 'dist'),
    publicPath: '/'
  },
  devServer: {
    contentBase: 'dist',
    overlay: true,
    hot: true
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        presets: ['env', 'react', 'stage-2']
      }
    }, {
      test: /\.(s*)css$/,
      use: this.mode ==='production' ? ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [{
          loader: 'css-loader',
          options: {
            modules: true,
            url: false,
            localIdentName: '[name]-[local]-[hash:base64:5]'
          }
        }, 
        'sass-loader']
      }) : ['style-loader', {
          loader: 'css-loader',
          options: {
            modules: true,
            url: false,
            localIdentName: '[name]-[local]-[hash:base64:5]'
          }
        }, 'sass-loader']
    }]
  }, 
  plugins: []
};

if(config.mode === 'production'){
  config.plugins.push(new UglifyJSPlugin(), new ExtractTextPlugin('../stylesheets/lea.css'))
}
if(config.mode === 'development'){
  config.plugins.push(new webpack.HotModuleReplacementPlugin())
}

module.exports = config;