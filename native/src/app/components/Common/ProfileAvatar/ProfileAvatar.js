import React, { Component } from 'react'
import { Image, StyleSheet, View } from 'react-native'
import PropTypes from 'prop-types'
import Layout from '../../../constants/Layout'

class ProfileAvatar extends Component {
  render() {
    const { sourceImage, size, callback } = this.props
    const style = size === undefined ? styles.medium : styles[size]

    return (
      <View className="inline">
        {callback ? (
          <div
            onClick={(e) => {
              callback(e)
            }}
          >
            <Image
              style={style}
              source={sourceImage}
              resizeMode="cover"
            />
          </div>
        ) : (
          <Image
            style={style}
            source={sourceImage}
            resizeMode="cover"
          />
        )}
      </View>
    )
  }
}

const styles = new StyleSheet.create({
  small: {
    width: 50,
    height: 50
  },
  medium: {
    width: Layout.width * 0.8,
    height: 50
  },
  large: {
    width: Layout.width * 0.8,
    height: 50
  }
})

ProfileAvatar.propTypes = {
  callback: PropTypes.func
}

export default ProfileAvatar
