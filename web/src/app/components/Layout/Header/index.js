import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProfileAvatarName from '../../ProfileAvatarName/ProfileAvatarName'
import PropTypes from 'prop-types'

@connect((store) => {
  return {
    profile: store.profile
  }
})
class Header extends Component {
  render() {
    const { profile } = this.props

    return (
      <ProfileAvatarName profile={profile.profile} size="medium" />
    )
  }
}

Header.propTypes = {
  profile: PropTypes.object
}

export default Header
