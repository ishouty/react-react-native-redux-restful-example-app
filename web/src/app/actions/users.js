import * as actionTypes from "./actionTypes"
import {getinstanceAxios} from "../actions/auth"

export const DEFAULT_START_PAGE = 1
export const DEFAULT_PAGE_SIZE = 10
const DEFAULT_FILTER = "all"

export function getUsersList(page = DEFAULT_START_PAGE, size = DEFAULT_PAGE_SIZE, filter=DEFAULT_FILTER) {

    return dispatch => {

        dispatch({type: actionTypes.LOADING_PAGE, payload: {common: true}})

        switch(filter) {
            case "male":
                filter = "&gender=male"
                break
            case "female":
                filter = "&gender=female"
                break
            default:
                filter = ""
                break
        }

        return getinstanceAxios().get(`/api/?page=${page}&results=${size}${filter}`)
            .then(response => {

                dispatch({type: actionTypes.LOADING_PAGE, payload: {common: false}})

                dispatch({
                    type: actionTypes.LOADED_USERS,
                    payload: response.data.results,
                    page: page
                })

            })
            .catch(error => {
                dispatch({type: actionTypes.LOADING_PAGE, payload: {common: false}})
            })
    }

}
