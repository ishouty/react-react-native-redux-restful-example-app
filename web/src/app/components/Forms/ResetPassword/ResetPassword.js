import React from "react"
import {Field, reduxForm} from "redux-form"
import {resetPassword} from "../../../actions/auth"
import {browserHistory, Link} from "react-router"
import {ResetPasswordText, LoginText, CommonText} from "../../../constants/text/text"
import {maxLength} from "../../../utils/HelperUtils"
import {Button, FormGroup, FormControl, HelpBlock, Row, Col} from "react-bootstrap"

const validate = values => {

    const errors = {}
    const requiredFields = ["email"]

    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = "Required"
        }
    })

    if (values.email && !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.email)) {
        errors.email = LoginText.invalidEmailAddress
    }
    return errors

}

const renderFieldText = ({id, input, label, type, disabled, placeholder, helpBlock, meta: {touched, error, warning}}) => (

    <div>
        {
            disabled == "true" ? <FormControl {...input} id={id} type={type} placeholder={placeholder} disabled/>
                :
                <FormControl {...input} id={id} type={type} placeholder={placeholder}/>
        }

        {
            (touched && ((error && <span className="error-block">{error}</span>) || (warning &&
                <span className="warning-block">{warning}</span>)) || <HelpBlock>{helpBlock}</HelpBlock>)
        }
    </div>

)

const getStyles = () => {

    return {
        form: {},
        helpBlock: {}
    }

}

const ResetPasswordForm = props => {

    const {error, handleSubmit, submitting} = props

    const styles = getStyles()

    return (

        <div>

            <form onSubmit={handleSubmit(resetPassword)}>

                <FormGroup bsSize="large">

                    <Field id="email" type="email" name="email"
                           placeholder={ResetPasswordText.placeholder} validate={[maxLength(254)]}
                           component={renderFieldText}/>

                    <HelpBlock style={styles.helpBlock}></HelpBlock>

                </FormGroup>

                <div>
                    {error && <strong>{error}</strong>}
                </div>

                <Row className="send-container no-margin">
                    <Button id="submit_btn" type="submit" bsSize="large"
                            onClick={() => {
                                handleSubmit(resetPassword)
                            }}
                            className="black-btn" disabled={submitting}>{CommonText.sendButton}</Button>
                </Row>

                <Col>
                    <Row>
                        <Link to="/">{CommonText.loginButton}</Link>
                    </Row>
                </Col>
            </form>

        </div>

    )

}

export default reduxForm({
    form: "ResetPasswordForm",  // a unique identifier for this form
    validate,
    resetPassword
})(ResetPasswordForm)
