import React from 'react'
import { StyleSheet, Text} from 'react-native'
import {MontSerratText} from "../Common/MontSerratText/MontSerratText"

import {View} from 'react-native'
import {LoginScreenText} from "../../constants/Text"
import Colors from "../../constants/Colors"
import TextInputField from '../Common/TextInputField/TextInputField'
import {Field, reduxForm} from 'redux-form'
import Fonts from "../../constants/Fonts";
import Button from '../Common/Button/Button'
import {submitLoginUser} from "../../actions/authActions"
import {gotoContactUs} from "../../utils/GeneralUtil"

const _validateEmail = values => {

    if (values && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values)) {
        return LoginScreenText.invalidEmailAddress
    }

}

const _validatePassword = values => {
    var passRegex = new RegExp( "^(?=.*[A-Z])(?=.*\\d)(?=.*[$@$!%*?&])[A-Za-z\\d$@$!%*?&]{8,}");

    if (!passRegex.test(values)) {
        return LoginScreenText.passwordCriteriaValidation
    }

}

const LoginForm = (props) => {
    const {handleSubmit, error, dropdown} = props

    return (

        <View style={props.styleForm}>

            <MontSerratText style={styles.noteLogin}>{LoginScreenText.credentialsNote}</MontSerratText>

            <Field style={styles.input} name={'email'}
                   placeholder={LoginScreenText.emailPlaceHolder}
                   component={TextInputField}
                   validate={_validateEmail}
            />

            <Field style={styles.input} name={'password'}
                   placeholder={LoginScreenText.passwordPlaceHolder}
                   component={TextInputField}
                   secureTextEntry={true}
                   validate={_validatePassword}
            />

            <Text style={styles.error}>{(error && error)}</Text>

            <Button callback={handleSubmit((values, dispatch, state) => {
                return submitLoginUser(values, dispatch, state, dropdown)
            })}
                    title={LoginScreenText.loginButton}
                    bsClass={buttonStyles}
            />

            <MontSerratText fontWeight={'bold'}
                            style={styles.contact}
                            onPress={gotoContactUs}>{LoginScreenText.contactButton}
            </MontSerratText>
        </View>
    )

}

export default reduxForm({form: 'LoginForm'})(LoginForm);

const buttonStyles = new StyleSheet.create({
    button: {
        borderColor: Colors.black,
        backgroundColor: Colors.black
    },
    buttonText: {
        color: Colors.white
    }
})

const styles = StyleSheet.create({
    input: {
        borderColor: Colors.black,
        fontFamily: Fonts.montserratRegular,
        borderWidth: 2,
        height: 40,
        marginBottom: 10,
        borderRadius: 0,
        padding: 10,
        backgroundColor: Colors.white
    },
    contact: {
        fontSize: 16,
        color: Colors.black,
        textAlign: 'center',
        paddingTop: 10
    },
    error: {
        color: 'red'
    },
    noteLogin: {
        marginBottom: 5,
        textAlign: 'center'
    }

})
