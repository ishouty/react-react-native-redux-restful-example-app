import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { Row } from 'react-bootstrap'
import { LoadingButton } from '../Common/Common'
import * as actionTypes from '../../actions/actionTypes'
import {
  ResetPasswordText,
  ResetPasswordCheckEmailText
} from '../../constants/text/text'
import ResetPasswordForm from '../Forms/ResetPassword/ResetPassword'
import Footer from '../Layout/Footer/Footer'
import PropTypes from 'prop-types'

@connect((store) => {
  return {
    resetPassword: store.users,
    profile: store.profile
  }
})
class ResetPassword extends Component {
  componentWillMount() {
    browserHistory.listen(() => {
      this.resetState(this.props.dispatch)
    })
  }

  resetState() {
    this.props.dispatch({
      type: actionTypes.RESET_PASSWORD,
      payload: { completeForm: false, email: null }
    })
  }

  BackToResetPassword(dispatch) {
    dispatch({
      type: actionTypes.RESET_PASSWORD,
      payload: { completeForm: false, email: null }
    })
  }

  render() {
    const { resetPassword, dispatch } = this.props

    return (
      <div className="reset-password-container">
        <div></div>
        <div>
          <LoadingButton />

          {resetPassword.completeResetPassword.completeForm ==
          false ? (
            <Row className="reset-password-main">
              <Row>
                <h1>{ResetPasswordText.title}</h1>
                <h5>{ResetPasswordText.description}</h5>
              </Row>

              <ResetPasswordForm dispatch={dispatch} />
            </Row>
          ) : (
            <Row className="reset-password-check-mail">
              <Row style={{ textAlign: 'center' }}>
                <h1>{ResetPasswordCheckEmailText.title}</h1>

                <Row className="firstMessage">
                  <span>
                    {ResetPasswordCheckEmailText.description[0]}
                    <b>{resetPassword.completeResetPassword.email}</b>
                  </span>
                </Row>

                <Row className="spacing">
                  <span>
                    {ResetPasswordCheckEmailText.description[1]}
                  </span>
                </Row>

                <Row>
                  <span>
                    {ResetPasswordCheckEmailText.description[2]}
                  </span>
                </Row>

                <Row className="spacing">
                  <span>
                    {ResetPasswordCheckEmailText.description[3]}
                  </span>
                </Row>

                <Row className="spacing">
                  <a
                    onClick={() => {
                      this.BackToResetPassword(dispatch)
                    }}
                  >
                    {ResetPasswordCheckEmailText.link}{' '}
                  </a>
                </Row>
              </Row>
            </Row>
          )}
        </div>
        <Footer />
      </div>
    )
  }
}

ResetPassword.propTypes = {
  dispatch: PropTypes.func,
  resetPassword: PropTypes.object
}

export default ResetPassword
