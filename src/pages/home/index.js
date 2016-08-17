/**
 * @author AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 2016/8/17
 */

export default {
    path: '/',
    getComponent(nextState, cb) {
        require.ensure([], require => {
            cb(null, require('./home').default)
        })
    }
}