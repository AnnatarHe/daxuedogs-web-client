/**
 * @author AnnatarHe
 * @email iamhele1994@gmail.com
 * @date 2016/8/17
 */

import Immutable from 'immutable'
import {
    LOCATION_CHANGE
} from 'react-router-redux'

const initialState = Immutable.fromJS({
    locationBeforeTransitions: null
})

export default (state = initialState, action) => {
    if (action.type === LOCATION_CHANGE) {
        return state.merge({
            locationBeforeTransitions: action.payload
        })
    }

    return state
}