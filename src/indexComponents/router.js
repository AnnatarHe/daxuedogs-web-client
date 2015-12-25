'use strict'

export default function(router) {
    router.map({
        '/': {
            name: 'index',
            component: require('./indexComponent.vue')
        },
        '/loading': {
            name: 'loading',
            component: require('../commonComponents/loading.vue')
        },
        '/activity/:id': {
            name: 'detail',
            component: require('./detailComponent.vue')
        },
        '/department': {
            name: 'departmentList',
            component: require('./department/showComponent.vue')
        },
        '/department/:did': {
            name: 'departmentDetail',
            component: require('./department/departmentDetailComponent.vue')
        }

    })
}
