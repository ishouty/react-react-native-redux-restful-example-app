const gulp = require('gulp'),
  gutil = require('gulp-util'),
  clean = require('gulp-clean'),
  moment = require('moment'),
  webpack = require('webpack'),
  path = require('path'),
  webpackDevMiddleware = require('webpack-dev-middleware'),
  webpackHotMiddleware = require('webpack-hot-middleware'),
  fs = require('fs'),
  http = require('http'),
  https = require('https'),
  express = require('express'),
  webpackConfig = require('./webpack.config.js'),
  htmlBuildPath = 'build',
  app = express() //local server

const environment = process.env.ENVIRONMENT

switch (environment) {
  //local, dev, staging build - loaded default
  case 'production':
    webpackConfig = require('./webpack.config.production.js')
    htmlBuildPath = 'dist'
    break
}

/////////////////////////////// COMMON ///////////////////////////////

gulp.task('clean-directory', function (callback) {
  htmlBuildPath = 'dist'
  return gulp.src(htmlBuildPath + '/*', { read: false }).pipe(clean())
})

///////////////////////////// DEVELOPMENT ///////////////////////////

////////////////////////////////// PRODUCTION ////////////////////////////

// Production build
gulp.task('webpack:build:prod', function (callback) {
  webpackConfig = require('./webpack.config.production.js')

  webpack(webpackConfig, function (err, stats) {
    if (err) throw new gutil.PluginError('webpack:build:prod', err)
    gutil.log(
      '[webpack:build:prod]',
      stats.toString({
        colors: true
      })
    )
    callback()
  })
})

////////////////////////////////// PRODUCTION ////////////////////////////

// Build and watch cycle (another option for development)
// Advantage: No server required, can run app from filesystem
// Disadvantage: Requests are not blocked until bundle is available,
// can serve an old app on refresh

gulp.task('webpack:build:dev', function (callback) {
  var devCompiler = webpack(webpackConfig)

  devCompiler.run(function (err, stats) {
    if (err) throw new gutil.PluginError('webpack:build:dev', err)

    gutil.log(
      '[webpack:build:dev]',
      stats.toString({
        colors: true
      })
    )

    callback()
  })
})

gulp.task('server', function (callback) {
  var myConfig = Object.create(webpackConfig)

  app
    .use(express.static(myConfig.output.path))
    .get('*', function (req, res) {
      res.sendFile('./index.html', {
        root: myConfig.output.path
      })
    })
    .listen(process.env.PORT || 8080, function (err) {
      if (err) {
        console.log(err)
      }
      console.log('Listening at localhost:8080')
    })
})

gulp.task('dev-server:dev:hmr', function (callback) {
  var compiler = webpack(webpackConfig),
    app = express()

  app.use(
    require('webpack-dev-middleware')(compiler, {
      publicPath: ''
    })
  )

  app.use(require('webpack-hot-middleware')(compiler))

  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
  })

  app.listen(3001, function (err) {
    if (err) {
      return console.error(err)
    }

    console.log('Listening at http://localhost:3001/')
  })
})

////////////////////////////////// DEVELOPMENT ////////////////////////////

/////////////////////////////// COMMON ///////////////////////////////

gulp.task('default', gulp.series('dev-server:dev:hmr'))

gulp.task(
  'build-dev',
  gulp.series('clean-directory', 'webpack:build:dev', 'server')
)

gulp.task(
  'build-prod',
  gulp.series('clean-directory', 'webpack:build:prod', 'server')
)
