/**
 * Created by Annatar on 2015/12/17.
 * Email: iamhele1994@gmail.com
 * Github: AnnatarHe
 */

'use strict';

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        index: './index.js',
        admin: './admin.js'
    },
    module: {
        loaders: [
            {
                test: /.vue$/,
                loader: 'vue'
            },
            {
                test: /\.js$/,
                exclude: /node_modules|app\/dist|vue-router\/|vue-loader\/vue-hot-reload-api\//,
                loader: 'babel'
            },
            {
                test: /\.styl$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract('vue-style-loader', 'css-loader!autoprefixer-loader!stylus-loader')
            },
            {
                test: /\.png$/,
                loader: "url-loader",
                exclude: /node_modules/,
                query: { mimetype: "image/png" }
            }
        ]
    },
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },
    output: {
        path: path.resolve(__dirname, 'app/dist'),
        publicPath: 'app/dist/',
        filename: '[name].bundle.[hash].js'
    },
    plugins: [
        // 打包
        new webpack.optimize.CommonsChunkPlugin('vendors.[hash].js'),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        // 压缩，丑化
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        // 分解css文件，减少文件大小
        new ExtractTextPlugin('style.[hash].css', {
            allChunks: true,
            disabled: false
        })
    ]
}
