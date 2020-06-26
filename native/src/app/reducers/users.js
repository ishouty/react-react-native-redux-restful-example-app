import * as actionTypes from '../actions/appActionTypes'

const initialState = {
  users: [],
  usersPage: 1,
  usersTotalPages: 100,
  completeResetPassword: {
    completeForm: false,
    email: null
  }
}

export default function reducer(state = initialState, action = {}) {
  const { type, payload, page } = action

  let newUsersList
  let newPage

  switch (type) {
    case actionTypes.LOADED_USERS:
      if (page === 1) {
        newUsersList = payload
        newPage = 1
      } else if (page > 0) {
        newUsersList = [...state.users, ...payload]
        newPage = page
      } else {
        newUsersList = payload
        newPage = 1
      }

      return {
        ...state,
        users: newUsersList,
        usersPage: newPage
      }

    case actionTypes.CLEAR_STATE:
      return initialState

    default:
      return state
  }
}
