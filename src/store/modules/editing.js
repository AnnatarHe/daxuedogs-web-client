'use strict'

import {
    EDITING_ACTIVITY_ID,
    EDITING_DEPARTMENT_ID,
    EDITING_EMAIL_MESSAGE_ID,
    VIEWING_ACCOUNT_ID
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
