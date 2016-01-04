/**
 * Created by Annatar on 2015/12/17.
 * Email: iamhele1994@gmail.com
 * Github: AnnatarHe
 */

'use strict';

import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import App from './src/indexComponents/App.vue'
import RouterMap from './src/indexComponents/router'
import Store from './src/store/index'

import Filters from './src/filtersDir/filters'

Vue.use(Router)
Vue.use(Resource)
Vue.filter('cuttime', Filters.cutTime)
Vue.filter('cutdesc', Filters.cutDesc)

const router = new Router()

RouterMap(router)

router.beforeEach(function({to, next}) {
    switch (to.name) {
        case 'index':
            Store.actions.setHeaderTitle('活动列表')
            break;
        case 'loading':
            Store.actions.setHeaderTitle('Loading')
            break;
        case 'detail':
            Store.actions.setHeaderTitle('详情页')
        case 'departmentList':
            Store.actions.setHeaderTitle('部门列表')
        default:
            break;
    }
    next()
})

router.start(App, '#index_page')
