/**
 * Created by Annatar on 2015/12/20.
 * Email: iamhele1994@gmail.com
 * Github: AnnatarHe
 */

'use strict';

import * as types from './mutation-types'

export const toggleNav = types.TOGGLE_NAV

export const toggleNavbar = ({ dispatch, state }) => {
    dispatch(types.TOGGLE_NAV)
}