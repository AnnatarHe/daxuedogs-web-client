/**
 * Created by Annatar on 2015/12/20.
 * Email: iamhele1994@gmail.com
 * Github: AnnatarHe
 */

'use strict';

import { GET_ACTIVIES_FROM_SERVER } from '../mutation-types'

export const activitiesInitialData = []

export const getActiviesMutations = {
    [GET_ACTIVIES_FROM_SERVER](state, activities) {
        state.activities = activities.data
    }
}
