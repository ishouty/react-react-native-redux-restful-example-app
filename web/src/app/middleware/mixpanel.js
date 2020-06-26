import mixpanel from 'mixpanel-browser'
import { MIX_PANEL, SAVE_HISTORY } from '../constants/index'

export default function mixPanelMiddleware({ dispatch, getState }) {
  return (next) => (action) => {
    const result = next(action)

    if (action.type == '@@router/LOCATION_CHANGE') {
      //save all history to event to track
      dispatch({ type: SAVE_HISTORY, payload: location.pathname })

      if (getState().navigation.previousRoute.length > 0) {
        var route = getState().navigation.previousRoute.length - 1

        if (
          typeof getState().navigation.previousRoute[route - 1] !==
          'undefined'
        ) {
          mixpanel.track(MIX_PANEL.pageView, {
            page: getState().navigation.previousRoute[route - 1]
          })
        }
      }

      mixpanel.track(MIX_PANEL.pageEnter, {
        page: action.payload.pathname
      })
      return result
    }

    return result
  }
}
