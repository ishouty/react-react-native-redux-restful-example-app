//Importing libraries
import React, {Component} from "react"
import {browserHistory, IndexRedirect, IndexRoute, Route, Router} from "react-router"
import {Provider} from "react-redux"
import {syncHistoryWithStore} from "react-router-redux"
import mixpanel from "mixpanel-browser"

import {store} from "./store"
import Config from "Config"
import Subscribers from "./subscribers"
import {MIX_PANEL, FILTER_USERS} from "../../src/app/constants"
import { RouteText } from  "../../src/app/constants/text/text"

//layout structure
import { logout } from "./actions/auth"
import MainLayout from "./containers/AppLayout"
import PlainLayout from "./containers/PlainLayout"
//Components not in main application
import ResetPassword from "./components/ResetPassword/ResetPassword"
import Login from "./components/Login/Login"
import NotFound from "./components/NotFound/NotFound"

//Debug development tool for redux and viewing store
import DevTools from "./containers/DevTools"
//Main Application
import Users, { OPEN_MALE_USERS,
                OPEN_FEMALE_USERS,
                OPEN_ALL_USERS } from "./containers/Users"


export default class Root extends Component {

    componentWillMount() {
        mixpanel.init(Config.MIXPANEL_TOKEN, {debug: false})
    }

    componentDidMount() {
        //when the browser is closed - this is good.
        window.addEventListener("beforeunload", (ev) => {
            mixpanel.track(MIX_PANEL.pageView, {page: location.pathname}) // on leave
        })
    }

    render() {

        syncHistoryWithStore(browserHistory, store) //subscribe and listen for redux changes
        Subscribers(store)

        return (
            <div>
                <Provider store={store}>
                    <div>
                        <Router history={browserHistory}>
                            <Route path='/' component={PlainLayout} >
                                <IndexRoute component={Login}/>
                                <Route path="login" component={Login} />
                                <Route path="reset-password" component={ResetPassword}/>
                            </Route>
                            <Route path='/app/' component={MainLayout} onChange={(previousState, nextState) => { if (nextState.location.action !== "POP") { window.scrollTo(0, 0); } }}>
                                <IndexRedirect to="users"/>
                                <Route path="users">
                                    <IndexRoute component={Users}
                                                title={RouteText.all}
                                                open={OPEN_ALL_USERS}
                                    />
                                </Route>
                                <Route path="female-users" component={Users}
                                       title={RouteText.femaleUsers}
                                       open={OPEN_FEMALE_USERS}/>

                                <Route path="male-users"
                                       component={Users}
                                       title={RouteText.maleUsers}
                                       open={OPEN_MALE_USERS}/>
                            </Route>
                            <Route path='/sign-out' component={Login} onEnter={ ()=> { logout() }  } />
                            <Route path='*' exact={true} component={NotFound} />
                        </Router>
                    </div>
                </Provider>
            </div>
        )
    }
}
