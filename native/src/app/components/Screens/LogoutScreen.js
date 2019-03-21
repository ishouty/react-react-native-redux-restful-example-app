import {Component} from 'react'
import { LoginActionType } from "../../actions/navigationActionTypes"

export default class LogoutScreen extends Component {

    constructor(props) {
        super(props)
    }

    componentWillMount() {

        const {dispatch} = this.props.navigation
        dispatch(LoginActionType)
    }

    render() {
        return null
    }

}

