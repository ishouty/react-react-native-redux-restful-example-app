import * as actionTypes from "../actions/actionTypes"

export const initialState = {
    modal: {
        userDetails: {
            display: false,
            details: {
                name: {
                    first: '',
                    last: ''
                },
                gender: '',
                email: '',
                phone: '',
                picture: '',
                location: {
                    street: '',
                    city: '',
                    postcode: ''
                }
            }
        }
    }
}

export default function reducer(state = initialState, action = {}) {
    const {type, payload} = action

    switch (type) {

        case actionTypes.USER_DETAIL_MODAL:

            return {
                ...state,

                modal: {

                    userDetails: {
                        display: payload.display,
                        details: payload
                    }
                }
            }


        case actionTypes.CLEAR_ALL_MODAL:
        default:
            return initialState


    }

}
