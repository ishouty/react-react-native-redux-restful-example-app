import React, { Component } from 'react'
import { UsersText } from '../../constants/text/text'
import ProfileAvatarName from '../ProfileAvatarName/ProfileAvatarName'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-bootstrap'

class UsersList extends Component {
  render() {
    const { user, detail } = this.props

    return (
      <Col
        className={
          detail ? 'user-container' : 'user-container-clickable'
        }
      >
        <Row>
          <ProfileAvatarName profile={user} />

          <h5>{UsersText.personalDetailsTitle}</h5>

          <div>
            {user.gender == 'male' ? (
              <i className="fa fa-male" aria-hidden="true"></i>
            ) : (
              <i className="fa fa-female" aria-hidden="true"></i>
            )}
            <span>
              {' '}
              {UsersText.gender}: {user.gender}{' '}
            </span>
          </div>

          <div>
            <span>
              <i className="fa fa-envelope-o" aria-hidden="true"></i>{' '}
              {UsersText.email}: {user.email}
            </span>
          </div>

          <div>
            <span>
              <i className="fa fa-phone" aria-hidden="true"></i>{' '}
              {UsersText.tel}: {user.cell}
            </span>
          </div>
        </Row>
      </Col>
    )
  }
}

UsersList.propTypes = {
  user: PropTypes.object.isRequired,
  detail: PropTypes.string
}

export default UsersList
