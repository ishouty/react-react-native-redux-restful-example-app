import React, { Component } from "react"
import { connect } from "react-redux"
import { Row, Col } from "react-bootstrap"

import { BannerRightSection, LoadingButton } from "../Common/Common"
import Footer from "../Layout/Footer/Footer"
import LoginForm from "../Forms/Login/Login"

import { LoginText } from "../../constants/text/text"
import rightSideImage from "../../../app/assets/images/layout/new-york-690868_1920.jpg"

@connect((store) => {
    return {
        profile: store.user
    }
})
class Login extends Component {

    render() {

        return (
            <div>

                <div className="login-wrapper">

                    <Col sm={6} className="left-section">
                        <div></div>
                        <Row className="login-wrap">

                            <LoadingButton />
                            <h1>{LoginText.login}</h1>
                            <LoginForm />
                        </Row>

                        <Footer />

                    </Col>

                    <BannerRightSection imageSrc={rightSideImage} messageTitle={LoginText.rightSideBannerText}/>

                </div>

            </div>
        )
    }

}

export default Login
