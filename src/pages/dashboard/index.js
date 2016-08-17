/**
 * @author AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 2016/8/17
 */
export default {
    path: 'dashboard',
    getComponent(nextState, cb) {
        require.ensure([], require => {
            cb(null, require('./dashboard').default)
        })
    }
}