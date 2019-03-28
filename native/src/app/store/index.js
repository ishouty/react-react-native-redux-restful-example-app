import { createStore, applyMiddleware } from "redux"
import Reducer from "../reducers/reducer"
import { composeWithDevTools } from "redux-devtools-extension"
import Middleware from "../middlewear"

// You can leave the redux-devtools-extension in production there is no harm.
// https://medium.com/@zalmoxis/using-redux-devtools-in-production-4c5b56c5600f
const store = createStore(
  Reducer,
  composeWithDevTools(applyMiddleware.apply(this, Middleware))
)

export default store
