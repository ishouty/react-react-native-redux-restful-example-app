import React, { Component } from 'react'
import { PageNotFoundText } from '../../constants/text/text'
import { Row } from 'react-bootstrap'


export default class NotFound extends Component {

    render() {

        return (
            <div>

                <div className="page-not-found-container">

                    <Row className="main-container">

                        <i className="fa fa-frown-o" aria-hidden="true"></i>

                        <h3>{ PageNotFoundText.message }</h3>

                    </Row>

                </div>
            </div>
        )

    }

}