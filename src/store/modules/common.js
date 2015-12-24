'use strict'

import {
SEND_MESSAGE_AT_ALERT,
SET_HEADER_TITLE,
LOADING_STATE
 } from '../mutation-types'

export const messageInitialInfo = {
    title: '',
    msg: '',
    type: 'success'
}
export const headerInitialTitle = '首页'
export const loadingInitialState = false
// 格式是这样的：
// {
//     title: 'title',
//     msg: 'foo',
//     type: 'error' | 'success'
// }
export const setMessageMutations = {
    [SEND_MESSAGE_AT_ALERT](state, alert) {
        state.alertMsg = alert
    }
}

export const setHeaderTitleMutations = {
    [SET_HEADER_TITLE](state, title) {
        state.headerTitle = title
    }
}

export const toggleLoadingStateMutations = {
    [LOADING_STATE](state) {
        state.loading = ! state.loading
    }
}
