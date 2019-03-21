import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import loading from './loading'
import navigation from './navigation'
import users from './users'
import notifications from './notifications'
import modal from './modal'

export default combineReducers({
  form,
  navigation,
  loading,
  users,
  notifications,
  modal,
  routing: routerReducer
})
