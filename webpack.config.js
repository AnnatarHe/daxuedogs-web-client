/**
 * Created by Annatar on 2015/12/17.
 * Email: iamhele1994@gmail.com
 * Github: AnnatarHe
 */

'use strict';

let path = require('path');

module.exports = {
    entry: {
        index: './index.js',
        admin: './admin.js'
    },
    devtool: 'eval-source-map',
    module: {
        loaders: [
            {
                test: /.vue$/,
                loader: 'vue'
            },
            {
                test: /\.js$/,
                exclude: /node_modules|app\/dist|vue-router\/|vue-loader\/vue-hot-reload-api\//,
                loader: 'babel',
            },
            {
                test: /\.styl$/,
                loader: 'style-loader!css-loader!autoprefixer-loader!stylus-loader'
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
        filename: '[name].bundle.js'
    }
};