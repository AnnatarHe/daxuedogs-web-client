/**
 * Created by Annatar on 2015/12/20.
 * Email: iamhele1994@gmail.com
 * Github: AnnatarHe
 */

'use strict';

import Vue from 'vue'
import Vuex from 'vuex'
import { navbarInitialState, navbarMutations } from './modules/nav'
import {
    activitiesInitialData,
    getActiviesMutations,
    currentInitialActivity,
    getCurrentActivityMutations
} from './modules/activities'
import {
    messageInitialInfo,
    setMessageMutations,
    headerInitialTitle,
    setHeaderTitleMutations,
    loadingInitialState,
    toggleLoadingStateMutations
} from './modules/common'
import * as actions from './actions'

Vue.use(Vuex)
Vue.config.debug = true

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    state: {
        nav: navbarInitialState,
        activities: activitiesInitialData,
        alertMsg: messageInitialInfo,
        headerTitle: headerInitialTitle,
        currentActivity: currentInitialActivity,
        loading: loadingInitialState
    },
    actions,
    mutations: [
        navbarMutations,
        getActiviesMutations,
        setMessageMutations,
        setHeaderTitleMutations,
        getCurrentActivityMutations,
        toggleLoadingStateMutations
    ],
    strict: debug,
    middlewares: debug ? [Vuex.createLogger()] : []
})
