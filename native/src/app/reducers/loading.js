import * as actionTypes from "../actions/appActionTypes"

const initialState = {
    loading: {
        common: false
    }
}


/**
 * Reducer deals with all the functionality of the loading bar
 * @param state
 * @param action
 * @returns {Array}
 */
export default function reducer(state = initialState, action = {}) {
    const { type, payload } = action

    switch (type) {

        case actionTypes.LOADING_BTN:
        case actionTypes.LOADING_SCREEN:

            return {
                ...state,
                loading: payload
            }


        default:
            return state
    }
}
