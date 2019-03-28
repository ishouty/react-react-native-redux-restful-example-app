import { combineReducers } from "redux"
import { reducer as form } from "redux-form"

//reducers
import navigation from "./navigation"
import loading from "./loading"
import users from "./users"


export default combineReducers({
    form,
    navigation,
    loading,
    users

})
