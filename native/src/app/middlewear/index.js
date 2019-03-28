import thunkMiddleware from "redux-thunk"
import {createReactNavigationReduxMiddleware} from "react-navigation-redux-helpers"
import logger from "./logger"

var middleWear

const navigationMiddleware = createReactNavigationReduxMiddleware(
    "root",
    state => state.navigation
)

export default middleWear = [
    thunkMiddleware,
    logger,
    navigationMiddleware
]
