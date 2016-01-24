import {
    AUTH_OBJ
} from '../mutation-types'

export const authInitialObj = {}

export const getAuthObjMutations = {
    [AUTH_OBJ](state, authObj) {
        state.authObj = authObj
    }
}
