import React, {Component} from 'react'
import {
    Dimensions,
    StyleSheet,
    Text,
    View
} from 'react-native'
import Colors from "../../constants/Colors"
import LoginForm from "../Forms/LoginForm"
import LoadingSpinner from 'react-native-loading-spinner-overlay'
import {connect} from 'react-redux'
import DropdownAlert from "react-native-dropdownalert"

import Fonts from "../../constants/Fonts";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const mapStateToProps = (state) => {
    return ({
        loading: state.loading
    })
}

class LoginScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {dimensions: {}}
    }

    _onLayout = (d) => {
        this.setState({dimensions: Dimensions.get('window')})
    }

    render() {

        const {loading} = this.props.loading
        const {width} = this.state.dimensions

        return (

            <View style={styles.container}>
                <LoadingSpinner visible={loading.common}/>
                <KeyboardAwareScrollView contentContainerStyle={styles.scrollViewContainer} onLayout={this._onLayout}>

                    <View style={{flex:1 , width: '100%'}}>

                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>Login</Text>
                        </View>
                    </View>

                    <LoginForm dropdown={this.dropdown} styleForm={[styles.loginForm, {width: width * .9}]}
                               navigation={this.props.navigation}/>

                    <DropdownAlert ref={ref => this.dropdown = ref}/>

                </KeyboardAwareScrollView>
            </View>

        )

    }

}

const AppStateWithLogin = connect(mapStateToProps)(LoginScreen)

export default AppStateWithLogin

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        alignContent: 'center',
        justifyContent: 'flex-start'
    },
    title: {
        fontFamily: Fonts.montserratBold,
        color: Colors.black,
        fontSize: 40,
    },
    scrollViewContainer: {
        flexGrow: 1,
        flexDirection: 'column',
        alignItems: 'center',
        width:'100%'
    },
    titleContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    loginForm: {
        flex: 1,
        width: '100%'
    }
})
