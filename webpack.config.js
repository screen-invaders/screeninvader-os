var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

var babelSettings = {
	presets: ['react', 'es2015'],
  plugins: ['transform-object-rest-spread', 'transform-class-properties']
}

new webpack.DefinePlugin({
  'process.env.NODE_ENV': '"development"'
})

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
      { test: /\.md$/, loader: 'raw' },
      { test: /\.yml$/, loader: 'json!yaml' },
      { test: /\.scss$/, loader: 'style-loader!css-loader!postcss-loader!sass' },
      { test: /\.(pdf|png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
    ]
  },
  postcss: function () {
      return {
          defaults: [autoprefixer]
      };
  }
};

module.exports = config;
