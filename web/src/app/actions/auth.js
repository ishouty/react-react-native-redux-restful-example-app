import Config from 'Config'
import {store} from '../store'
import axios from 'axios'

import * as actionTypes from '../actions/actionTypes'
import * as message from '../constants/text/text'
import { browserHistory } from 'react-router'

/**
 * Dispatch action to fetch and authenticate user
 * Store tokens
 * @param values
 * @returns {*}
 */
export function submitLoginUser(values, dispatch) {
    dispatch({type: actionTypes.LOADING_PAGE, payload: {common: true}})

    browserHistory.push('/app/users')

    //validate the user is valid with a dispatch
    //store various local storage and session

}

export function resetPassword (values, dispatch)  {

    store.dispatch({type: actionTypes.RESET_PASSWORD, payload: {completeForm: true, email: values.email}})

}

export function logout() {
    browserHistory.push('/')
    localStorage.clear()
    store.dispatch({type: actionTypes.CLEAR_STATE})
}

export function getinstanceAxios() {

    let instanceAxios = axios.create({
            baseURL: Config.API_URL,
            transformResponse: [function (response) {
                if (response.length > 0) {
                    const data = JSON.parse(response)

                    //list of details
                    if (data) {
                        return {
                            results: data.results,
                            info: data.info.page
                        }
                    }

                    return data;
                }
            }]
        }
    );

    instanceAxios.interceptors.response.use(function (response) {
        // Do something with response data
        return response;
    }, function (error) {
        store.dispatch({
            type: actionTypes.BANNER_NOTIFICATION,
            payload: {fail: true, success: false, message: message.ErrorResponse.badRequest}
        })

        return Promise.reject(error)
    })

    //set default headers
    instanceAxios.defaults.headers.post['Content-Type'] = 'application/json'

    return instanceAxios
}




