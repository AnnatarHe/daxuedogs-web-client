/**
 * Created by Annatar on 2015/12/20.
 * Email: iamhele1994@gmail.com
 * Github: AnnatarHe
 */

'use strict';

import * as types from './mutation-types'
import Resource from '../resource'

export const toggleNav = types.TOGGLE_NAV

export const toggleNavbar = ({ dispatch, state }) => {
    dispatch(types.TOGGLE_NAV)
}
// 从服务端获取活动列表
export const getActivitiesDataFromServer = ({ dispatch, state }, cxt) => {
    cxt.$http.get(`${Resource.prefix}/api/activity/lists/with/registed`)
        .then((res) => {
            dispatch(types.GET_ACTIVIES_FROM_SERVER, JSON.parse(res.response))
        }, (res) => {
            console.log('error');
        })
}

// 设定当前阅读的活动ID
export const setCurrentActivityId = ({ dispatch, state }, id) => {
    dispatch(types.CURRENT_ACTIVITY_ID, id)
}

// 设置弹出框警告
export const sendAlertMessage = ({ dispatch, state }, alterMessageObj) => {
    dispatch(types.SEND_MESSAGE_AT_ALERT, alterMessageObj)
}

// loading 状态调整。不同于上面的那个哦
export const toggleLoadingModal = ({ dispatch, state }) => {
    dispatch(types.LOADING_STATE)
}

// 设置头部的标题
export const setHeaderTitle = ({ dispatch, state }, title) => {
    dispatch(types.SET_HEADER_TITLE, title)
}

export const getCurrentActivity = ({ dispatch, state }, _this, id) => {
    _this.$http.get(`${Resource.prefix}/api/activity/${id}`)
    .then((res) => {
        dispatch(types.GET_CURRENT_ACTIVITY, res.data)
        dispatch(types.UPDATE_ACTIVITY_TITLE, res.data.title)
        dispatch(types.UPDATE_ACTIVITY_DESC, res.data.desc)
        dispatch(types.UPDATE_ACTIVITY_GENDER, !! res.data.needGender)
        dispatch(types.UPDATE_ACTIVITY_DORMITORY, !! res.data.needDormitory)
        dispatch(types.UPDATE_ACTIVITY_ENDTIME, res.data.endtime.split(' ')[0])
    }, (res) => {
        console.log('error at get a activity')
    })
}

export const toggleUserModal = ({ dispatch, state }) => {
    dispatch(types.USER_MODAL_STATE)
}

export const switchUserCurrentAtModal = ({ dispatch, state}, nextId) => {
    dispatch(types.USER_CURRENT_STATE, nextId)
}

// 从服务器上获取部门列表信息
export const getAllDepartmentFromServer = ({ dispatch, state }) => {
    // 抓取数据
    // dispatch(types.GET_ALL_DEPARTMENT_FROM_SERVER, data)
}

export const getOneDepartmentFromServer = ({ dispatch, state }, did) => {
    // 抓取数据
    // dispatch(types.GET_ONE_DEPARTMENT_FROM_SERVER, data)
}

// 切换modal层是否显示
export const toggleModalState = ({ dispatch, state }) => {
    dispatch(types.MODAL_STATE)
}

// 设置正在编辑的类型
// 1. email
// 2. activity
// 3. branch
// 4. account
export const setModalType = ({ dispatch, state}, type) => {
    dispatch(types.MODAL_TYPE, type)
}

// 设置正在编辑的id
export const setEditingActivityId = ({ dispatch, state}, id) => {
    dispatch(types.EDITING_ACTIVITY_ID, id)
    dispatch(types.GET_ACTIVIES_FROM_SERVER, id)
}

export const setEditingDepartmentId = ({ dispatch, state }, id) => {
    dispatch(types.EDITING_DEPARTMENT_ID, id)
}

export const setEditingEmailMessageId = ({ dispatch, state}, id) => {
    dispatch(types.EDITING_EMAIL_MESSAGE_ID, id)
}

export const setViewingAccountId = ({ dispatch, state}, id) => {
    dispatch(types.VIEWING_ACCOUNT_ID, id)
}

export const updateActivityTitle = ({ dispatch, state }, title) => {
    dispatch(types.UPDATE_ACTIVITY_TITLE, title)
}

export const updateActivityDesc = ({ dispatch, state}, desc) => {
    dispatch(types.UPDATE_ACTIVITY_DESC, desc)
}

export const updateActivityGender = ({ dispatch, state}) => {
    dispatch(types.UPDATE_ACTIVITY_GENDER)
}

export const updateActivityDormitory = ({ dispatch, state}) => {
    dispatch(types.UPDATE_ACTIVITY_DORMITORY)
}

export const updateActivityEndtime = ({ dispatch, state }, endtime) => {
    dispatch(types.UPDATE_ACTIVITY_ENDTIME, endtime)
}

// 登陆学生会的信息 auth
export const getAuthObj = ({ dispatch, state }, ctx) => {
    // 因为是从服务端获取这张页面的，服务端验证，如果验证用户没有登录是没办法获得这张页面的。
    // 所以放心啦～安全问题妥妥的搞定了
    ctx.$http.get(`${Resource.prefix}/api/users/current`)
        .then( res => {
            dispatch(types.AUTH_OBJ, res)
        })
        .catch( err => {
            console.log(err)
        })
}

export const getActivityTeams = ({ dispatch, state }, http) => {
    let id = state.currentActivityId
    http.get(`${Resource.prefix}/api/activity/${id}/teams`)
        .then( res => {
            dispatch(types.ACTIVITY_TEAMS, res.data)
        })
}
