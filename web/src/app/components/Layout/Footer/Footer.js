import React, { Component } from 'react'
import { FooterText } from '../../../constants/text/text'

export default class Footer extends Component {

    render() {

        return (

            <div className="footer">
                <div>
                    {FooterText.rightReserved}
                </div>
            </div>

        )
    }

}
