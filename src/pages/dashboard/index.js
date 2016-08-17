export default {
    path: 'dashboard',
    getComponent(nextState, cb) {
        require.ensure([], require => {
            cb(null, require('./dashboard').default)
        })
    }
}