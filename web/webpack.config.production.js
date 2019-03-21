/* eslint-disable */
var path = require('path'),
    webpack = require('webpack'),
    moment = require('moment'),

//EXTRACTION FOR CSS,LESS
    extractTextPlugin = require('extract-text-webpack-plugin'),
    htmlWebpackPlugin = require('html-webpack-plugin'),

//DECLARE PATHS
    appPath = path.join(__dirname, 'src', 'app'),
    buildPath = path.join(__dirname, 'dist'),
    environment = process.env.ENVIRONMENT,
    jsonConfig;

//Used for asset configuration cache busting
var timeInMs = moment().format("DMYYhmm");

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


switch (environment) {

    default:
    case "staging":
        jsonConfig = require(appPath + '/config/staging.json')
        break;

    case "production":
        jsonConfig = require(appPath + '/config/production.json')
        break;

}

module.exports = {
    mode: 'production',
    devtool: 'source-map',
    context: appPath,
    entry: {
        js: appPath + '/index'
    },
    output: {
        path: buildPath,
        filename: `bundle.js?v=${timeInMs}`,
        publicPath: ''
    },
    plugins: [
        new UglifyJsPlugin({
            cache: false,
            parallel: true,
            uglifyOptions: {
                compress: true,
                ecma: 6,
                mangle: true
            },
            sourceMap: true
        }),
        new extractTextPlugin({
            filename: `style.css?v=${timeInMs}`,
            disable: false,
            allChunks: true
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            },
            __DEVELOPMENT__: false,
            __DEVTOOLS__: false
        }),
        new htmlWebpackPlugin({
            title: 'Andy Nguyen - Full Stack Developer',
            template: appPath + '/assets/html/index.hbs',
            filename: 'index.html'
        })
    ],
    externals: {
        'Config': JSON.stringify(jsonConfig)
    },
    resolve: {
        alias: {
            'redux': path.join(__dirname, 'node_modules/redux')
        },
        extensions: ['.js', '.css', '.less', '.webpack-loader.js', '.web-loader.js', '.loader.js']
    },
    module: {

        rules: [
            {
                test: /\.(js|jsx)$/,
                enforce: "pre",
                exclude: /node_modules/,
                include: appPath,
                use: ['babel-loader']
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
                    use: "css-loader!less-loader",
                    publicPath: "/"
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
};
