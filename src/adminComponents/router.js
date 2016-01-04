'use strict'

export default function(router) {
    router.map({
        '/': {
            name: 'main',
            component: require('./mainController.vue')
        }
    })
}
