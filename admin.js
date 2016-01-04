/**
 * Created by Annatar on 2015/12/17.
 * Email: iamhele1994@gmail.com
 * Github: AnnatarHe
 */

'use strict';

import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import App from './src/adminComponents/App.vue'
import routerMap from './src/adminComponents/router'

Vue.use(Router)
Vue.use(Resource)

const router = new Router()

routerMap(router)

router.start(App, '#admin_page')

console.log('hello worldfdf');
