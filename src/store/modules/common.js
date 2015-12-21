'use strict'

import { SEND_MESSAGE_AT_ALERT, SET_HEADER_TITLE } from '../mutation-types'

export const messageInitialInfo = {}
export const headerInitialTitle = '首页'

// 格式是这样的：
// {
//     title: 'title',
//     msg: 'foo',
//     type: 'error' | 'success'
// }
export const setMessageMutations = {
    [SEND_MESSAGE_AT_ALERT](state, alter) {
        state.alter = alter
    }
}

export const setHeaderTitleMutations = {
    [SET_HEADER_TITLE](state, title) {
        state.headerTitle = title
    }
}