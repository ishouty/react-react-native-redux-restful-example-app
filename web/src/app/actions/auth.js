import Config from 'Config'
import { store } from '../store'
import { SubmissionError } from 'redux-form'
import axios from 'axios'
import * as actionTypes from '../actions/actionTypes'
import * as message from '../constants/text/text'
import { browserHistory } from 'react-router'
import { getAccessTokenSelector } from '../selectors/auth'
import { getinstanceAxios } from '../services/http'

const badNotificationAction = {
  type: actionTypes.BANNER_NOTIFICATION,
  payload: {
    fail: true,
    success: false,
    message: message.ErrorResponse.badRequest
  }
}

export async function submitLoginUser(values, dispatch) {
  dispatch({
    type: actionTypes.LOADING_PAGE,
    payload: { common: true }
  })

  const loginResult = await axios.post(Config.API_URL + '/login', {
    client_id: Config.CLIENT_ID,
    grant_type: Config.GRANT_TYPE_PASSWORD,
    client_secret: Config.CLIENT_SECRET,
    username: values.email,
    password: values.password
  })

  if (loginResult && loginResult.error) {
    return error.response
  }

  dispatch({
    type: actionTypes.LOADING_PAGE,
    payload: { common: false }
  })

  if (loginResult && getAccessTokenSelector(loginResult)) {
    saveTokens(loginResult.data)
    browserHistory.push('/app/users')
  } else if (loginResult.data.error) {
    throw new SubmissionError({
      _error: loginResult.data.error_description
    })
  }
}

export function saveTokens(params) {
  const { access_token, refresh_token, expires_in } = params

  localStorage.setItem('access_token', access_token)
  localStorage.setItem('expiry_date', expires_in)
  localStorage.setItem('refresh_token', refresh_token)

  getinstanceAxios().defaults.headers.common[
    'Authorization'
  ] = `bearer ${access_token}`
}

export function resetPassword(values, dispatch) {
  store.dispatch({
    type: actionTypes.RESET_PASSWORD,
    payload: { completeForm: true, email: values.email }
  })
}

export function logout() {
  browserHistory.push('/')
  localStorage.clear()
  store.dispatch({ type: actionTypes.CLEAR_STATE })
}
