/**
 * Created by Annatar on 2015/12/20.
 * Email: iamhele1994@gmail.com
 * Github: AnnatarHe
 */

'use strict';

import * as types from './mutation-types'
import { remoteAddress } from '../resource'

export const toggleNav = types.TOGGLE_NAV

export const toggleNavbar = ({ dispatch, state }) => {
    dispatch(types.TOGGLE_NAV)
}

export const getActivitiesDataFromServer = ({ dispatch, state }, _this) => {
    _this.$http.get(remoteAddress.getActivitiesData)
        .then((res) => {
            dispatch(types.GET_ACTIVIES_FROM_SERVER, JSON.parse(res.response))
        }, (res) => {
            console.log('error');
        })
}

// 设置弹出框警告
export const sendAlertMessage = ({ dispatch, state }, alterMessageObj) => {
    dispatch(types.SEND_MESSAGE_AT_ALERT, alterMessageObj)
}

// 设置头部的标题
export const setHeaderTitle = ({ dispatch, state }, title) => {
    dispatch(types.SET_HEADER_TITLE, title)
}

export const getCurrentActivity = ({ dispatch, state }, _this, id) => {
    // _this.$http.get(remoteAddress.getOneActivityAddress + '/' + id)
    _this.$http.get(remoteAddress.getOneActivityAddress)
    .then((res) => {
        dispatch(types.GET_CURRENT_ACTIVITY, JSON.parse(res.response))
    }, (res) => {
        console.log('error at get a activity')
    })
}
