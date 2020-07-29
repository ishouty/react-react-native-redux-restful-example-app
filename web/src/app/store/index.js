import { createStore, applyMiddleware, compose } from 'redux'

import Middleware from '../middleware'
import Reducer from '../reducers/reducer'
import { composeWithDevTools } from 'redux-devtools-extension'

let finalCreateStore

if (__DEVELOPMENT__ && __DEVTOOLS__) {
  finalCreateStore = createStore(
    Reducer,
    composeWithDevTools(applyMiddleware.apply(this, Middleware))
  )
} else {
  finalCreateStore = compose(applyMiddleware.apply(this, Middleware))(
    Reducer,
    createStore
  )
}

// function getDebugSessionKey() {
//   // You can write custom logic here!
//   // By default we try to read the key from ?debug_session=<key> in the address bar
//   const matches = window.location.href.match(
//     /[?&]debug_session=([^&]+)\b/
//   )
//   return matches && matches.length > 0 ? matches[1] : null
// }

export const store = finalCreateStore
