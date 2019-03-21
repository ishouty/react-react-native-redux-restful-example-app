import { NavigationActions } from 'react-navigation'
import { HEADER_NAVIGATION, MOUTH_CONDITIONS } from '../constants/index'
import { CLEAR_USER_DETAILS } from './appActionTypes'
import { logOutUser } from './authActions'

export const LoginActionType = NavigationActions.navigate({
    routeName: 'Login'
})

export const MainAppActionType = (transition = 'scaleWithOpacityTransition', condition = 'logo') => {
    return NavigationActions.navigate({
        routeName: 'AllGenders',
        params: {
            transition: transition,
            condition: condition
        }
    })
}

export const LogoutActionType = dispatch => {
    return NavigationActions.navigate({ routeName: 'Logout' })
}