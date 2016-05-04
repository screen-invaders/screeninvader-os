var webpack = require('webpack');

var babelSettings = {
	presets: ['react', 'es2015']
}

var config = {
  entry: './src/entry.jsx',
  output: {
    path: './build',
    filename: "bundle.js"
  },

  module: {
    loaders: [
      { test: /\.(js|jsx)$/, loaders: ['react-hot', 'babel?'+JSON.stringify(babelSettings)], exclude: /node_modules/},
      { test: /\.json$/, loader: 'json' },
      { test: /\.scss$/, loader: 'style!css!sass' },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({minimize: true}),
  ]
};

module.exports = config;
