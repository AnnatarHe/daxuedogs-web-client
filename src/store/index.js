/**
 * Created by Annatar on 2015/12/20.
 * Email: iamhele1994@gmail.com
 * Github: AnnatarHe
 */

'use strict';

import Vue from 'vue'
import Vuex from 'vuex'
import {navbarInitialState, navbarMutations} from './modules/nav'
import * as actions from './actions'

Vue.use(Vuex)
Vue.config.debug = true

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    state: {
        nav: navbarInitialState
    },
    actions,
    mutations: [navbarMutations],
    strict: debug,
    middlewares: debug ? [Vuex.createLogger()] : []
})
