'use strict'

import {
    EDITING_ACTIVITY_ID,
    EDITING_DEPARTMENT_ID,
    EDITING_EMAIL_MESSAGE_ID,
    VIEWING_ACCOUNT_ID,
    UPDATE_ACTIVITY_TITLE,
    UPDATE_ACTIVITY_DESC,
    UPDATE_ACTIVITY_GENDER,
    UPDATE_ACTIVITY_DORMITORY,
    UPDATE_ACTIVITY_ENDTIME
} from '../mutation-types'

export const editingActivityInitialId = 0

export const editingDepartmentInitialId = 0

export const editingEmailMessageInitialId = 0

export const viewingInitialAcountId = 0

export const setEditingActivityIdMutations = {
    [EDITING_ACTIVITY_ID](state, id) {
        state.editingActivityId = id
    }
}

export const setEditingDepartmentIdMutations = {
    [EDITING_DEPARTMENT_ID](state, id) {
        state.editingDepartmentId = id
    }
}

export const setEditingEmailMessageIdMutations = {
    [EDITING_EMAIL_MESSAGE_ID](state, id) {
        state.editingEmailMessageId = id
    }
}

export const setViewingAccountIdMutations = {
    [VIEWING_ACCOUNT_ID](state, id) {
        state.viewingAccountId = id
    }
}


// 更新活动的具体信息的form 组合的东西
export const updateActivityTitleMutations = {
    [UPDATE_ACTIVITY_TITLE](state, title) {
        state.updateActivityTitle = title
    }
}
export const updateActivityDescMutations = {
    [UPDATE_ACTIVITY_DESC](state, desc) {
        state.updateActivityDesc = desc
    }
}
export const updateActivityGenderMutations = {
    [UPDATE_ACTIVITY_GENDER](state) {
        state.updateActivityGender = ! state.updateActivityGender
    }
}
export const updateActivityDormitoryMutations = {
    [UPDATE_ACTIVITY_DORMITORY](state) {
        state.updateActivityDormitory = ! state.updateActivityDormitory
    }
}
export const updateActivityEndtimeMutations = {
    [UPDATE_ACTIVITY_ENDTIME](state, endtime) {
        state.updateActivityEndtime = endtime
    }
}
