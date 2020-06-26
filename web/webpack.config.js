/* eslint-disable */
var path = require('path'),
  webpack = require('webpack'),
  moment = require('moment'),
  //WEBPACK PLUGINS
  extractTextPlugin = require('extract-text-webpack-plugin'),
  htmlWebpackPlugin = require('html-webpack-plugin'),
  CopyWebpackPlugin = require('copy-webpack-plugin')

//DECLARE PATHS
;(appPath = path.join(__dirname, 'src', 'app')),
  (buildPath = path.join(__dirname, 'build')),
  (environment = process.env.ENVIRONMENT)

//Used for asset configuration cache busting
var timeInMs = moment().format('DMYY'),
  jsonConfig

switch (environment) {
  default:
  case 'local':
    jsonConfig = require(appPath + '/config/local.json')
    console.log(JSON.stringify(jsonConfig))
    break

  case 'production':
    jsonConfig = require(appPath + '/config/production.json')
    console.log(JSON.stringify(jsonConfig))
    break
}

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  entry: {
    main: ['./src/app/index.js']
  },
  output: {
    path: buildPath,
    filename: `bundle.js?v=${timeInMs}`,
    publicPath: ''
  },
  plugins: [
    //new webpack.HotModuleReplacementPlugin(),
    new extractTextPlugin({
      filename: `style.css?v=${timeInMs}`,
      disable: false,
      allChunks: false
    }),
    new webpack.DefinePlugin({
      __DEVELOPMENT__: true,
      __DEVTOOLS__: true
    }),
    new htmlWebpackPlugin({
      title: 'Andy Nguyen - Full Stack Developer',
      template: appPath + '/assets/html/index.hbs',
      filename: 'index.html'
    }),
    new CopyWebpackPlugin([
      {
        from: appPath + '/assets/images/favicon/',
        to: buildPath + '/images/favicon'
      }
    ])
  ],
  externals: {
    Config: JSON.stringify(jsonConfig)
  },
  resolve: {
    extensions: [
      '.js',
      '.css',
      '.less',
      '.webpack-loader.js',
      '.web-loader.js',
      '.loader.js'
    ]
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        include: appPath,
        use: ['react-hot-loader/webpack', 'babel-loader']
      },
      {
        test: /\.css$/,
        use: extractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
          publicPath: buildPath
        })
      },
      {
        test: /\.less$/,
        use: extractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader!less-loader',
          publicPath: '/'
        })
      },
      {
        test: /\.(jpg|jpeg|gif|png)$/,
        exclude: /node_modules/,
        loader: 'url-loader?limit=1024&name=images/[name].[ext]'
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg|ico)$/,
        exclude: /node_modules/,
        loader: 'url-loader?limit=1024&name=fonts/[name].[ext]'
      }
    ]
  }
}
