const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const values = require('postcss-modules-values')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const config = {
    entry: {
        index: path.resolve(__dirname, '..', 'src/index.jsx')
    },
    output: {
        path: path.resolve(__dirname, '..', 'dist'),
        publicPath: '/',
        filename: 'bundle.[hash].js'
    },
    modules: {
        loaders: [{
            test: /.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel'
        }, {
            test: /.css$/,
            exclude: /node_modules/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&cameCase!postcss-loader')
        }, {
            test: /.styl$/,
            exclude: /node_modules/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader!stylus-loader')
        }, {
            test: /\.(png|jpg|jpeg|gif|woff)$/,
            loader: 'url-loader?limit=8192'
        }]
    },
    postcss: [
        values
    ],
    plugins: [
        new HtmlWebpackPlugin({
            title: 'daxuedogs',
            inject: 'body',
            template: 'src/templates/index.html'
        }),
        new webpack.optimize.CommonsChunkPlugin('vendors.[hash].js')
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
}

module.exports = config
