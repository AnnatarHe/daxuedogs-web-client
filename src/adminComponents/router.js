'use strict'

export default function(router) {
    router.map({
        '/': {
            name: 'summary',
            component: require('./mainController.vue')
        },
        '/all': {
            name: 'all',
            component: require('./controllers/allData.vue')
        },
        '/activity': {
            name: 'activity',
            component: require('./controllers/activity.vue')
        },
        '/activity/add': {
            name: 'activityAdd',
            component: require('./controllers/addActivity.vue')
        },
        // 什么系，比如电子电工
        '/branch': {
            name: 'branch',
            component: require('./controllers/viewAllBranch.vue')
        },
        '/branch/add': {
            name: 'branchAdd',
            component: require('./controllers/addBranch.vue')
        },
        '/schools': {
            name: 'school',
            component: require('./controllers/viewAllSchool.vue')
        },
        '/schools/add': {
            name: 'schoolsAdd',
            component: require('./controllers/addSchool.vue')
        },
        '/account': {
            name: 'account',
            component: require('./controllers/viewAccount.vue')
        },
        '/account/add': {
            name: 'accountAdd',
            component: require('./controllers/addAccount.vue')
        }

    })
}
