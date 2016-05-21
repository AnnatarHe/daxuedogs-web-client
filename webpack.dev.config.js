const config = require('./webpack.config.js')
config.devServer = {
    hot: true,
    inline: true,
    proxy: {
        '/api/*': {
            target: 'http://127.0.0.1:9999',
            secure: false
        }
    }
}

module.exports = config
