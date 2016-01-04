'use strict'

import {
    GET_ALL_DEPARTMENT_FROM_SERVER,
    GET_ONE_DEPARTMENT_FROM_SERVER
} from '../mutation-types'

export const allDepartmentInitialData = []

export const oneDepartmentInitialData = {}

export const getAllDepartmentFromServerMutations = {
    [GET_ALL_DEPARTMENT_FROM_SERVER](state, allDepartmentData) {
        state.allDepartmentData = allDepartmentData
    }
}

export const getOneDepartmentFromServerMutations = {
    [GET_ONE_DEPARTMENT_FROM_SERVER](state, oneDepartmentData) {
        state.oneDepartmentData = oneDepartmentData
    }
}
