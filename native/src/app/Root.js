import React from 'react'
import {Platform, StatusBar, StyleSheet, View, AppState} from 'react-native'
import {AppLoading, Asset, Font} from 'expo'
import {Ionicons} from '@expo/vector-icons'
import {addNavigationHelpers} from 'react-navigation'
import RootStackNavigator from './router/RootNavigation'

import store from './store'
import {connect, Provider} from 'react-redux'
import {createReduxBoundAddListener} from "react-navigation-redux-helpers"

const addListener = createReduxBoundAddListener("root")

const App = ({dispatch, navigation}) => (
    <RootStackNavigator
        navigation={addNavigationHelpers({
            dispatch,
            state: navigation,
            addListener
        })}
    />
)

const mapStateToProps = (state) => {
    return ({
        navigation: state.navigation
    })
}

const AppStateWithNavigation = connect(mapStateToProps)(App)

export default class Root extends React.Component {
    state = {
        isLoadingComplete: false,
        appState: AppState.currentState
    };

    componentWillUnmount() {
        AppState.removeEventListener('change', this._handleAppStateChange);
    }

    _handleAppStateChange = (nextAppState) => {

        if (this.state.appState.match(/inactive|background/) && nextAppState === 'active') {
            console.log('App has come to the foreground!')
        }

        this.setState({appState: nextAppState});

    }


    componentDidMount() {

    }


    render() {

        if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
            return (
                <AppLoading
                    startAsync={this._loadResourcesAsync}
                    onError={this._handleLoadingError}
                    onFinish={this._handleFinishLoading}
                />
            );
        } else {
            return (
                <Provider store={store}>
                    <View style={styles.container}>
                        {Platform.OS === 'ios' && <StatusBar barStyle="default"/>}
                        {Platform.OS === 'android' && <View style={styles.statusBarUnderlay}/>}
                        <AppStateWithNavigation/>
                    </View>
                </Provider>
            )
        }

    }

    _loadResourcesAsync = async () => {
        return Promise.all([
            Asset.loadAsync([
                require('./assets/images/icon.png')
            ]),
            Font.loadAsync({
                // This is the font that we are using for our tab bar
                ...Ionicons.font,
                'montserrat-regular': require('./assets/fonts/Montserrat-Regular.ttf'),
                'montserrat-thin': require('./assets/fonts/Montserrat-Thin.ttf'),
                'montserrat-bold': require('./assets/fonts/Montserrat-Bold.ttf')
            }),
        ]);
    };

    _handleLoadingError = error => {
        // In this case, you might want to report the error to your error
        // reporting service, for example Sentry
        console.warn(error);
    };

    _handleFinishLoading = () => {
        this.setState({isLoadingComplete: true});
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    statusBarUnderlay: {
        height: 24,
        backgroundColor: 'rgba(0,0,0,0.2)',
    },
});
