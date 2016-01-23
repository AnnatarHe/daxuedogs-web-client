'use strict'

import {
    MODAL_TYPE,
    MODAL_STATE
} from '../mutation-types'

export const modalInitialType = 'email'

export const modalInitialState = false

export const toggleModalStateMutations = {
    [MODAL_STATE](state) {
        state.modalState = ! state.modalState
    }
}

export const setModalTypeMutations = {
    [MODAL_TYPE](state, type) {
        state.modalType = type
    }
}
