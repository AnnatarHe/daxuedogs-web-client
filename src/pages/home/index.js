export default {
    path: '/',
    getComponent(nextState, cb) {
        require.ensure([], require => {
            cb(null, require('./home').default)
        })
    }
}