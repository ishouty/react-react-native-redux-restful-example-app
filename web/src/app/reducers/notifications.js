import * as actionTypes from '../actions/actionTypes'

const initialState = {
    banner: {
        fail: false,
        success: false,
        message: ''
    }
}

export default function reducer(state = initialState, action = {}) {
    const { type, payload } = action

    switch (type) {

        case actionTypes.BANNER_NOTIFICATION:
            return {
                banner: payload
            }

        case actionTypes.CLEAR_STATE:
            return initialState

        default:
            return state

    }
}