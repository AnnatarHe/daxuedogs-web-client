'use strict'

import {
    USER_MODAL_STATE,
    USER_CURRENT_STATE
 } from '../mutation-types'

export const userInitialModalState = false

// 1 === 普通同学登陆
// 2 === 普通同学注册
// 3 === 学生会部门申请账户
// 4 === 学生会管理员登入
export const userInitialCurrentAtModal = 1

export const toggleUserModalMutations = {
    [USER_MODAL_STATE](state) {
        state.userModalState = ! state.userModalState
    }
}

export const switchUserCurrentAtModalMutations = {
    [USER_CURRENT_STATE](state, id) {
        state.userCurrentAtModal = id
    }
}
