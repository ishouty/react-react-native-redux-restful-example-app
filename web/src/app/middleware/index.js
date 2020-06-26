import thunkMiddlewear from 'redux-thunk'
import loggerMiddlewear from './logger'
import promiseMiddlewear from 'redux-promise-middleware'
import mixPanelMiddleware from './mixpanel'
let middleWear

if (__DEVELOPMENT__ && __DEVTOOLS__) {
  middleWear = [
    thunkMiddlewear,
    loggerMiddlewear,
    mixPanelMiddleware,
    promiseMiddlewear()
  ]
} else {
  middleWear = [
    thunkMiddlewear,
    mixPanelMiddleware,
    promiseMiddlewear()
  ]
}

export default middleWear
