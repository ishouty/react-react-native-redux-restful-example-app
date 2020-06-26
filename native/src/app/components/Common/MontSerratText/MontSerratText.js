import React from 'react'
import { Text } from 'react-native'

export class MontSerratText extends React.Component {
  constructor(props) {
    super(props)
  }

  _getFontType(fontWeight) {
    switch (fontWeight) {
      case 'regular':
        return 'montserrat-regular'

      case 'bold':
        return 'montserrat-bold'

      case 'light':
        return 'montserrat-light'

      default:
        return 'montserrat-regular'
    }
  }

  render() {
    const { fontWeight } = this.props
    return (
      <Text
        {...this.props}
        style={[
          this.props.style,
          { fontFamily: this._getFontType(fontWeight) }
        ]}
      />
    )
  }
}
