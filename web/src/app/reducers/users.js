import * as actionTypes from '../actions/actionTypes'

export const initialState = {
  users: [],
  usersPage: 1,
  usersTotalPages: 100
}

export default function reducer(state = initialState, action = {}) {
  const { type, payload, page } = action

  switch (type) {
    case actionTypes.LOADED_USERS:
      let newUsersList, newPage

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

    //reset user password
    case actionTypes.RESET_PASSWORD:
      return {
        ...state,
        completeResetPassword: payload
      }

    case actionTypes.CLEAR_STATE:
      return initialState

    default:
      return state
  }
}
