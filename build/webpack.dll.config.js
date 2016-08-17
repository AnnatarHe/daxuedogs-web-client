const path = require('path')
const webpack = require('webpack')

const vendors = [
    'react',
    'react-dom',
    'react-router',
    'react-router-redux',
    'redux',
    'react-redux',
    'redux-immutable',
    'redux-thunk',
    'immutable',
    'whatwg-fetch'
]

module.exports = {
    entry: {
        vendor: vendors,
    },
    output: {
        path: path.join(__dirname, '..', 'dist'),
        filename: '[id].dll.js',
        library: '[name]'
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname, '..', 'dist', '[name]-manifest.json'),
            name: '[name]',
            context: path.resolve(__dirname, '..')
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            comments: false
        }),
        new webpack.optimize.OccurenceOrderPlugin()
    ]
}