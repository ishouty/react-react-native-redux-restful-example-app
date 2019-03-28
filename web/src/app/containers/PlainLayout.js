import React, { Component } from "react"
import {Banner} from "../components/Common/Common"

export default class PlainLayout extends Component {

    constructor (props, context) {
        super(props, context)

    }

    render () {

        return (

            <div id="layout">

                <div id="main">
                    <Banner />
                    {/* this will render the child routes */}
                    {this.props.children}

                </div>

            </div>

        )
    }
}
