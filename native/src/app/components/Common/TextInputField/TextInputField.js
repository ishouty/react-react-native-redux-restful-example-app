import React from 'react'
import {Text, TextInput, View, StyleSheet} from 'react-native'
import Fonts from "../../../constants/Fonts";

export default class TextInputField extends React.Component {

    render() {

        const {input, ...inputProps} = this.props;
        const {error, touched, warning } = inputProps.meta

        return (
            <View>
                <TextInput
                    {...inputProps}
                    onChangeText={input.onChange}
                    onBlur={input.onBlur}
                    onFocus={input.onFocus}
                    value={input.value}
                />

                {
                    (touched && ((error && <Text style={styles.error}>{error}</Text>) || (warning &&
                        <Text style={styles.error}>{warning}</Text>)))
                }
            </View>
        )
    }

}

const styles = StyleSheet.create({
    error: {
        color: 'red',
        fontFamily: Fonts.montserratRegular,
        paddingBottom: 10
    }

})