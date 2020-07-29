import axios from 'axios'
import Config from 'Config'

export function getinstanceAxios() {
  let instanceAxios = axios.create({
    baseURL: Config.API_URL,
    transformResponse: [
      function (response) {
        if (response.length > 0) {
          const data = JSON.parse(response)

          //list of details
          if (data) {
            return {
              results: data.results,
              info: data.info.page
            }
          }

          return data
        }
      }
    ]
  })

  instanceAxios.interceptors.response.use(
    function (response) {
      // Do something with response data
      return response
    },
    function (error) {
      store.dispatch(badNotificationAction)

      return Promise.reject(error)
    }
  )

  //set default headers
  instanceAxios.defaults.headers.post['Content-Type'] =
    'application/json'

  return instanceAxios
}

export function getinstanceThirdPartyAxios() {
  let instanceAxios = axios.create({
    baseURL: Config.THIRD_PARTY_API,
    transformResponse: [
      function (response) {
        if (response.length > 0) {
          const data = JSON.parse(response)

          //list of details
          if (data) {
            return {
              results: data.results,
              info: data.info.page
            }
          }

          return data
        }
      }
    ]
  })

  instanceAxios.interceptors.response.use(
    function (response) {
      // Do something with response data
      return response
    },
    function (error) {
      store.dispatch(badNotificationAction)

      return Promise.reject(error)
    }
  )

  //set default headers
  instanceAxios.defaults.headers.post['Content-Type'] =
    'application/json'

  return instanceAxios
}
