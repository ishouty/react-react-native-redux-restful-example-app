import React, { Component } from 'react'

import '../../assets/less/ProfileAvatar/index.less'
import PropTypes from 'prop-types'

class ProfileAvatar extends Component {
  render() {
    const { profile, size, callback } = this.props

    if (!profile) return null

    const avatarClass = size === undefined ? 'medium' : size

    return (
      <div className="inline">
        {callback ? (
          <div
            className="profile-link"
            onClick={(e) => {
              callback(e)
            }}
          >
            <div
              className={'profile-avatar-' + avatarClass}
              style={{
                backgroundImage: `url(${profile.profileImage})`
              }}
            />
          </div>
        ) : (
          <div
            className={'profile-avatar-' + avatarClass}
            style={{
              backgroundImage: `url(${profile.profileImage})`
            }}
          />
        )}
      </div>
    )
  }
}

ProfileAvatar.propTypes = {
  profile: PropTypes.object.isRequired,
  nav: PropTypes.string,
  callback: PropTypes.func
}

export default ProfileAvatar
