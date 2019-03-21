import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from "react-router"
import { Button, FormGroup, FormControl, HelpBlock, Row, Col } from 'react-bootstrap'

import { LoginText } from '../../../constants/text/text'
import { renderFieldText } from '../../Common/Common'
import { maxLength, required } from '../../../utils/HelperUtils'
import { submitLoginUser } from '../../../actions/auth'
import Config from 'Config'

const validate = values => {
    const errors = {}
    const requiredFields = ['email', 'password']

    requiredFields.map((field) => {
        if(!values[field] && field === 'password') {
            errors.password = LoginText.passwordValidation
        }
    })

    if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = LoginText.invalidEmailAddress
    }

    return errors
}

const getStyles = () => {

    return {
        form: {
            marginTop: 10,
            marginBottom: 20,
            textAlign:'center',
            width: '100%'
        }
    }
}

const LoginForm = props => {
    const { handleSubmit, error } = props
    const styles = getStyles()
    const maxLength254 = maxLength(254)

    return (
        <div className="login-wrap">
            <form onSubmit={handleSubmit(submitLoginUser)}>
                <Row>
                    <Col>
                        <div>{LoginText.title}</div>
                        <FormGroup bsSize="large">
                            <Field 
                            id="email" 
                            type="email" 
                            name="email"
                            validate={maxLength254}
                            placeholder={LoginText.emailAddress}
                            component={renderFieldText} 
                        />
                        </FormGroup>
                        <FormGroup bsSize="large">
                            <Field
                                id="password"
                                type="password"
                                name="password"
                                validate={maxLength254}
                                placeholder={LoginText.password}
                                component={renderFieldText}
                            />
                        </FormGroup>
                        <div style={styles.form} className="error-block">
                            {
                                (error && error) 
                            }
                        </div>
                        <Row className="join-container">
                            <Button 
                                id="submit_btn" 
                                type="submit" 
                                className="blue-btn"
                                onClick={() => handleSubmit(submitLoginUser)}>
                                {LoginText.login}
                            </Button>
                        </Row>
                    </Col>
                </Row>
            </form>
            <Row>
                <Col sm={12} className="forgot-password-wrap">
                    <ul>
                        <li>
                            <Link to="/reset-password">{LoginText.forgotPassword}</Link>
                        </li>
                        <li>
                            <span>|</span>
                        </li>
                        <li>
                            <a href={Config.CONTACT} target="_blank">{LoginText.contact}</a>
                        </li>
                    </ul>
                </Col>
            </Row>
        </div>
    )

}

export default reduxForm({
    form: 'LoginForm',
    validate,
    submitLoginUser
})(LoginForm)
