import React from 'react'
import { StackNavigator } from 'react-navigation'

import TabsInDrawer from './DrawerTabNavigator'
import { Ionicons } from '@expo/vector-icons'
import Colors from '../constants/Colors'
import Fonts from '../constants/Fonts'

//screens
import LoginScreen from '../components/Screens/LoginScreen'

import { transitionConfig } from './Transitions'
import { MainAppActionType } from '../actions/navigationActionTypes'
import { MontSerratText } from '../components/Common/MontSerratText/MontSerratText'

//core route navigation which includes the rest of the navigation
const RootStackNavigator = StackNavigator(
    {
        Login: {
            screen: LoginScreen,
            drawerLockMode: 'locked-closed',
            navigationOptions: {
                drawerLockMode: 'locked-closed',
                header: null
            }
        },
        Main: {
            screen: TabsInDrawer,
            navigationOptions: props => {
                let menu = {
                    gesturesEnabled: false,
                    drawerLockMode: 'locked-closed',
                    headerTitle: 'App',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        color: Colors.white,
                        fontFamily: Fonts.montserratRegular
                    },
                    headerStyle: {
                        backgroundColor: Colors.primaryBlue
                    },
                    headerLeft: (
                        <MontSerratText
                            style={{ color: Colors.white, marginLeft: 10 }}
                            onPress={() => {
                                props.navigation.dispatch(MainAppActionType('default'))
                            }}
                        >
                            Back
                        </MontSerratText>
                    )
                }

                let menuDefault = {
                    headerTitle: 'APP',
                    headerStyle: {
                        backgroundColor: Colors.white
                    },
                    headerLeft: (
                        <Ionicons
                            name="ios-menu"
                            size={28}
                            style={{ marginLeft: 10 }}
                            color={Colors.black}
                            onPress={() => {
                                props.navigation.navigate('DrawerToggle')
                            }}
                        />
                    ),
                    headerRight: null,
                    gesturesEnabled: false
                }

                switch (props.navigationOptions.drawerLabel) {
                    default:
                        return menuDefault
                }

            }
        }
    },
    {
        initialRouteName: 'Login',
        gesturesEnabled: false,
        navigationOptions: () => ({
            index: 1,
            headerTitleStyle: {
                fontWeight: 'normal'
            }
        }),
        transitionConfig //deals with all the transitions for navigation for this navigation
    }
)

export default RootStackNavigator
