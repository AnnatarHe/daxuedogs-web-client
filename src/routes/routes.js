/**
 * @author AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 2016/8/17
 */

import App from '../components/app'
import Home from '../pages/home/home'
import home from '../pages/home/index'
import dashboard from '../pages/dashboard/index'

const routes = {
    path: '/',
    component: App,
    indexRoute: { component: Home },
    childRoutes: [
        home,
        dashboard
    ]
}

export default routes
