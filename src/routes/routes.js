import App from '../components/app'
import Dashboard from '../components/dashboard/dashboard'
const routes = {
    path: '/',
    indexRoute: { component: App},
    childRoutes: [
    { path: '/dashboard', component: Dashboard}
    ]
}

export default routes
