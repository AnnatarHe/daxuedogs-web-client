/**
 * Created by Annatar on 2015/12/20.
 * Email: iamhele1994@gmail.com
 * Github: AnnatarHe
 */

'use strict';

import {SHOW_NAV, HIDE_NAV, TOGGLE_NAV} from '../mutation-types'

// false 表示不显示导航栏
// true 表示显示
export const navbarInitialState = false

export const navbarMutations = {
    [SHOW_NAV](state, status) {
        state.status = status
    },
    [HIDE_NAV](state, status) {
        state.status = status
    },
    [TOGGLE_NAV](state) {
        state.status = !state.status
    }
}