import axios from 'axios'
import Config from '../config/config.json'
import { LoginActionType, MainAppActionType } from './navigationActionTypes'
import { CLEAR_USER_DETAILS, LOADING_SCREEN } from './appActionTypes'
import { reset, stopSubmit, SubmissionError } from 'redux-form'

export function submitLoginUser(values, dispatch, state, dropdown) {
    dispatch({type: LOADING_SCREEN, payload: {common: false}})

    dispatch(stopSubmit('LoginForm'), {})
    dispatch(reset('LoginForm'))
    dispatch(MainAppActionType())

}

export function logOutUser(dispatch, callback) {
    dispatch({type: CLEAR_USER_DETAILS})
}

export function getinstanceAxios(dispatch) {

    let instanceAxios = axios.create({
            baseURL: Config.API_URL,
            headers: {'Content-Type': 'application/json'},
            transformResponse: [(response) => {

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

    instanceAxios.interceptors.response.use((response) => {
        return response;

    }, function (error) {

        try {

            if (error.message === 'Network Error') {
                //TODO ALERT USER THERE IS A NETWORK ISSUE
            }

            switch (error.response.status) {

                case 401:
                case 403:
                case 412:
                    dispatch(LoginActionType)
                    break
                case 500:
                    //TODO ALERT THERE IS A 500 ISSUE
                    break

            }

        } catch (e) {
            dispatch(LoginActionType)
        }


        return Promise.reject(error)
    })

    //set default headers
    instanceAxios.defaults.headers.post['Content-Type'] = 'application/json'
    instanceAxios.defaults.headers.get['Content-Type'] = 'application/json'
    instanceAxios.defaults.headers.common['Content-Type'] = 'application/json'

    return instanceAxios

}