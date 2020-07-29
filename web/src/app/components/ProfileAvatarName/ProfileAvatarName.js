import '../../assets/less/ProfileAvatarName/index.less'
import React, { Component } from 'react'
import ProfileAvatar from './../ProfileAvatar/ProfileAvatar'
import PropTypes from 'prop-types'

class ProfileAvatarName extends Component {
  render() {
    const { profile, size, nav } = this.props

    return profile.picture ? (
      <div className="inline">
        <div className={`profile-container`}>
          <ProfileAvatar
            profile={{ profileImage: profile.picture.medium }}
            size={size}
          />

          <div className="profile-name">
            <div className={nav ? 'name-nav' : 'name'}>
              {profile.name.first} {nav ? '' : profile.name.last}
            </div>
          </div>
        </div>
      </div>
    ) : null
  }
}

ProfileAvatarName.propTypes = {
  profile: PropTypes.object.isRequired,
  nav: PropTypes.string,
  size: PropTypes.string
}

export default ProfileAvatarName
