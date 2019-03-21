import React from 'react'
import {View, StyleSheet} from "react-native"
import {MontSerratText} from "../Common/MontSerratText/MontSerratText"
import {SafeAreaView} from 'react-navigation'
import CustomDrawerNavigatorItems from "./CustomDrawerNavigatorItems"
import Colors from "../../constants/Colors"
import {CommonText} from "../../constants/Text"

class SideMenu extends React.Component {

    render() {

        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.content} forceInset={{top: 'always', horizontal: 'never'}}>
                    <CustomDrawerNavigatorItems {...this.props} />
                </SafeAreaView>

                <View style={styles.footer}>
                    <MontSerratText style={styles.footerText}>{CommonText.copyRight}</MontSerratText>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    content: {
        flex: 1,
    },
    footer: {
        margin: 20
    },
    footerText: {
        color: Colors.black
    }

})

export default SideMenu