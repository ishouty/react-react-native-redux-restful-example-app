import React from 'react'
import { TabNavigator, TabBarBottom, DrawerNavigator } from 'react-navigation'
import Colors from '../constants/Colors'
import SideMenu from '../components/SideMenu/SideMenu'

//screens
import LogoutScreen from '../components/Screens/LogoutScreen'
import AllGendersScreen from '../components/Screens/AllGendersScreen'
import FemaleScreen from '../components/Screens/FemaleScreen'
import MaleScreen from '../components/Screens/MaleScreen'

//display the main footer navigation on the main screen

const MainFooterNavigation = TabNavigator(
    {
        AllGenders: {
            screen: AllGendersScreen
        },
        Female: {
            screen: FemaleScreen
        },
        Male: {
            screen: MaleScreen
        }
    },
    {
        tabBarOptions: {
            activeTintColor: Colors.white,
            inactiveTintColor: Colors.black,
            activeBackgroundColor: Colors.black,
            inactiveBackgroundColor: Colors.white,
            allowFontScaling: true,
            // showIcon: false, // Comment this out and re-enable the marginTop, marginBottom for the notifications bubble to appear
            labelStyle: {
                fontSize: 13,
                fontFamily: 'montserrat-regular',
                marginTop: 10,
                marginBottom: 16
            },
            tabStyle: {
                height: 200,
                width: 'auto',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative'
            },
            style: {
                backgroundColor: Colors.black
            }
        },
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        animationEnabled: false,
        swipeEnabled: false,
        navigationOptions: ({ navigation }) => {
            return {
                tabBarOnPress: state => {
                    state.jumpToIndex(state.scene.index)
                    // You can use sceneProps.previousScreen here
                }
            }
        }
    }
)

//right side navigation component
const TabsInDrawer = DrawerNavigator(
    {
        Home: {
            screen: MainFooterNavigation,
            navigationOptions: {
                drawerLabel: 'Home'
            }
        },
        Logout: {
            screen: LogoutScreen,
            navigationOptions: ({ navigation }) => ({
                drawerLabel: 'Log out',
                header: null,
                drawerLockMode: 'locked-closed'})
        }
    },
    {
        contentComponent: SideMenu,
        drawerPosition: 'left'
    }
)

export default TabsInDrawer
