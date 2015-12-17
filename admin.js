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
import IndexComponent from './src/indexComponents/indexComponent.vue'

Vue.use(Router)
Vue.use(Resource)

let router = new Router()

router.map({
    'index': {
        component: IndexComponent
    }
})

router.start(App, '#admin_page')

console.log('hello world');
