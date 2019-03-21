import React, { Component } from "react"
import { Ionicons } from "@expo/vector-icons"
import { Text, View, StyleSheet, TouchableHighlight } from "react-native"
import Colors from "../../../constants/Colors"
import Fonts from "../../../constants/Fonts"

export default class Button extends Component {
  render() {
    const { title, callback, bsClass, shouldShowRightIcon } = this.props

    let buttonTitleStyle = shouldShowRightIcon ? styles.buttonTextLeft : styles.buttonTextCenter

    return (
      <View>
        <TouchableHighlight
          onPress={() => {
            callback()
          }}
        >
          <View style={[styles.buttonContainer, bsClass.button]}>
            <Text style={[buttonTitleStyle, bsClass.buttonText]}>{title}</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    borderRadius: 0,
    borderColor: Colors.black,
    borderWidth: 2,
    height: 40
  },
  button: {
    borderRadius: 0,
    borderColor: Colors.black,
    borderWidth: 2,
    height: 40
  },
  buttonTextCenter: {
    padding: 5,
    color: Colors.black,
    fontFamily: Fonts.montserratBold,
    fontSize: 16,
    textAlign: 'center'
},
buttonTextLeft: {
    color: Colors.black,
    fontFamily: Fonts.montserratBold,
    fontSize: 16,
    flexGrow: 2
  },
  iconRight: {
    margin: 10
  }
})
