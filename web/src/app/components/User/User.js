import React, { Component } from 'react'
import { UsersText } from '../../constants/text/text'
import ProfileAvatarName from '../ProfileAvatarName/ProfileAvatarName'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-bootstrap'

class User extends Component {
  render() {
    const { user, detail, displayAvatar } = this.props

    return (
      <Col
        className={
          detail ? 'user-container' : 'user-container-clickable'
        }
      >
        <Row>
          {displayAvatar && <ProfileAvatarName profile={user} />}
          {user.firstName && (
            <div>
              <i className="fa fa-user" aria-hidden="true"></i>{' '}
              {user.firstName} {user.lastName}
            </div>
          )}
          <h5>{UsersText.personalDetailsTitle}</h5>
          {user.email && (
            <div>
              <span>
                <i
                  className="fa fa-envelope-o"
                  aria-hidden="true"
                ></i>{' '}
                {UsersText.email}: {user.email}
              </span>
            </div>
          )}

          {user.userType && (
            <div>
              <span>
                <i className="fa fa-id-card" aria-hidden="true"></i>{' '}
                {UsersText.userType}: {user.userType}
              </span>
            </div>
          )}

          {user.cell && (
            <div>
              <span>
                <i className="fa fa-phone" aria-hidden="true"></i>{' '}
                {UsersText.tel}: {user.cell}
              </span>
            </div>
          )}
        </Row>
      </Col>
    )
  }
}

User.defaultProps = {
  displayAvatar: true
}

User.propTypes = {
  user: PropTypes.object.isRequired,
  detail: PropTypes.string,
  displayAvatar: PropTypes.bool
}

export default User
