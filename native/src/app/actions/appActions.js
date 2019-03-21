import {getinstanceAxios} from "./authActions"
import {LOADING_SCREEN, LOADED_USERS} from "./appActionTypes"
import { DEFAULT_FILTER, DEFAULT_PAGE_SIZE, DEFAULT_START_PAGE } from "../constants"

export function getUsersList(failCallBack = ()=> {}, page = DEFAULT_START_PAGE, size = DEFAULT_PAGE_SIZE, filter=DEFAULT_FILTER) {

    return dispatch => {

        dispatch({type: LOADING_SCREEN, payload: {common: true}})

        switch(filter) {
            case "male":
                filter = '&gender=male'
                break
            case "female":
                filter = '&gender=female'
                break
            default:
                filter = ''
                break
        }

        return getinstanceAxios(dispatch).get(`/api/?page=${page}&results=${size}${filter}`)
            .then(response => {

                dispatch({type: LOADING_SCREEN, payload: {common: false}})

                dispatch({
                    type: LOADED_USERS,
                    payload: response.data.results,
                    page: page
                })

            })
            .catch(error => {
                dispatch({type: LOADED_USERS, payload: {common: false}})
            })
    }

}
