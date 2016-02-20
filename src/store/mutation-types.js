/**
 * Created by Annatar on 2015/12/20.
 * Email: iamhele1994@gmail.com
 * Github: AnnatarHe
 */

'use strict';

export const TOGGLE_NAV = 'TOGGLE_NAV'

/* 通用部分 **/
// 发送提示框，暂时没有用
export const SEND_MESSAGE_AT_ALERT = 'SEND_MESSAGE_AT_ALERT'
// 设置头部的名字
export const SET_HEADER_TITLE = 'SET_HEADER_TITLE'
// 加载中的状态
export const LOADING_STATE = 'LOADING_STATE'

/* modal 层样式 */
// modal 层类型
export const MODAL_TYPE = 'MODAL_TYPE'
// modal 层状态
export const MODAL_STATE = 'MODAL_STATE'

// 用户登陆框的挡板情况
export const USER_MODAL_STATE = 'USER_MODAL_STATE'
// 用户的当前状态
export const USER_CURRENT_STATE = 'USER_CURRENT_STATE'

/* 活动部分的 **/
// 获取活动列表
export const GET_ACTIVIES_FROM_SERVER = 'GET_ACTIVIES_FROM_SERVER'
// 获取当前活动
export const GET_CURRENT_ACTIVITY = 'GET_CURRENT_ACTIVITY'
// 当前活动是不是团队活动
export const GET_CURRENT_ACTIVITY_TEAM = 'GET_CURRENT_ACTIVITY_TEAM'

/* 学生会部门的部分 **/
export const GET_ALL_DEPARTMENT_FROM_SERVER = 'GET_ALL_DEPARTMENT_FROM_SERVER'

export const GET_ONE_DEPARTMENT_FROM_SERVER = 'GET_ONE_DEPARTMENT_FROM_SERVER'

/* 编辑中的状态 */
// 正在修改的活动的id
export const EDITING_ACTIVITY_ID = 'EDITING_ACTIVITY_ID'
// 正在修改的部门的id
export const EDITING_DEPARTMENT_ID = 'EDITING_DEPARTMENT_ID'
// 正在写的邮件的对应活动的id
export const EDITING_EMAIL_MESSAGE_ID = 'EDITING_EMAIL_MESSAGE_ID'
// 正在查看的账户信息
export const VIEWING_ACCOUNT_ID = 'VIEWING_ACCOUNT_ID'

/* 更新活动信息 */
export const UPDATE_ACTIVITY_TITLE = 'UPDATE_ACTIVITY_TITLE'
export const UPDATE_ACTIVITY_DESC = 'UPDATE_ACTIVITY_DESC'
export const UPDATE_ACTIVITY_GENDER = 'UPDATE_ACTIVITY_GENDER'
export const UPDATE_ACTIVITY_DORMITORY = 'UPDATE_ACTIVITY_DORMITORY'
export const UPDATE_ACTIVITY_ENDTIME = 'UPDATE_ACTIVITY_ENDTIME'

/* 登陆用户信息，包含权限等级 */
export const AUTH_OBJ = 'AUTH_OBJ'
