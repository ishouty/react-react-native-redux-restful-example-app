import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Modal } from 'react-bootstrap'
import * as actionTypes from '../../actions/actionTypes'
import { UsersText } from '../../constants/text/text'
import ProfileAvatarName from '../ProfileAvatarName/ProfileAvatarName'

@connect((store) => {
  return {
    modal: store.modal
  }
})
class ModalBox extends React.Component {
  render() {
    const { modal, dispatch } = this.props
    const { details } = modal.modal.userDetails

    const closeModal = () => {
      dispatch({ type: actionTypes.CLEAR_ALL_MODAL })
    }

    return (
      details && (
        <Modal
          show={modal.modal.userDetails.display}
          onHide={closeModal}
          dialogClassName="modal-90w"
        >
          <Modal.Header closeButton>
            <Modal.Title className="text-capitalize">
              <ProfileAvatarName profile={details} size="large" />
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              {details.gender == 'male' ? (
                <i className="fa fa-male" aria-hidden="true"></i>
              ) : (
                <i className="fa fa-female" aria-hidden="true"></i>
              )}
              <span>
                {' '}
                {UsersText.gender}: {details.gender}{' '}
              </span>
            </div>
            <div>
              <span>
                <i
                  className="fa fa-envelope-o"
                  aria-hidden="true"
                ></i>{' '}
                {UsersText.email}: {details.email}
              </span>
            </div>

            <div>
              <span>
                <i className="fa fa-phone" aria-hidden="true"></i>{' '}
                {UsersText.tel}: {details.cell}
              </span>
            </div>

            <h5> {UsersText.address}</h5>

            <div>
              <span>
                {UsersText.street}: {details.location.street.name}
              </span>
            </div>

            <div>
              <span>
                {UsersText.city}: {details.location.city}
              </span>
            </div>

            <div>
              <span>
                {UsersText.postcode}: {details.location.postcode}
              </span>
            </div>
          </Modal.Body>
        </Modal>
      )
    )
  }
}

ModalBox.propTypes = {
  dispatch: PropTypes.func
}

export default ModalBox
