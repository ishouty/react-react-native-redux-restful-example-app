import { NavigationActions } from "react-navigation"
import RootStackNavigator from "../router/RootNavigation"

const initialState = RootStackNavigator.router.getStateForAction(NavigationActions.init())

export default function reducer(state = initialState, action ={}) {
    const { type, payload, page } = action
    const nextState = RootStackNavigator.router.getStateForAction(action, state)

    return nextState || state

}
