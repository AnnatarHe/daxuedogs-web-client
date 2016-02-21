/**
 * Created by Annatar on 2015/12/20.
 * Email: iamhele1994@gmail.com
 * Github: AnnatarHe
 */

'use strict';

import {
    GET_ACTIVIES_FROM_SERVER,
    GET_CURRENT_ACTIVITY,
    SEND_USERINFO_TO_ACTIVITY,
    CURRENT_ACTIVITY_ID,
    ACTIVITY_TEAMS
} from '../mutation-types'

export const activitiesInitialData = []

export const getActiviesMutations = {
    [GET_ACTIVIES_FROM_SERVER](state, activities) {
        state.activities = activities.data
    }
}

export const currentInitialActivity = {}

export const getCurrentActivityMutations = {
    [GET_CURRENT_ACTIVITY](state, activity) {
        state.currentActivity = activity
    }
}

export const currentActivityInitialId = 0

export const setCurrentActivityIdMutations = {
    [CURRENT_ACTIVITY_ID](state, id) {
        state.currentActivityId = id
    }
}

export const activityInitialTeams = []

export const getActivityTeamsMutations = {
    [ACTIVITY_TEAMS](state, teams) {
        state.activityTeams = teams 
    }
}
