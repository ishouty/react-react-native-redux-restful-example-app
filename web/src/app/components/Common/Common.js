import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Col, FormControl, HelpBlock, Row } from 'react-bootstrap'
import 'react-select/dist/react-select.css'
import * as Constants from '../../constants'
import PropTypes from 'prop-types'

class BannerRightSection extends Component {
  getStyles() {
    const { imageSrc } = this.props

    return {
      rightSection: {
        backgroundImage: `url(${imageSrc})`
      }
    }
  }

  render() {
    const styles = this.getStyles()
    const { messageTitle } = this.props

    return (
      <Col
        sm={6}
        className="right-section"
        style={styles.rightSection}
      >
        <Row></Row>
        <Row className="text-container">
          <h2>{messageTitle}</h2>
        </Row>
        <Row></Row>
      </Col>
    )
  }
}

BannerRightSection.propTypes = {
  messageTitle: PropTypes.string,
  imageSrc: PropTypes.string.isRequired
}

const renderFieldText = ({
  id,
  input,
  label,
  type,
  disabled,
  placeholder,
  helpBlock,
  userValue,
  meta: { touched, error, warning }
}) => (
  <div>
    {disabled == 'true' ? (
      <FormControl
        {...input}
        id={id}
        type={type}
        placeholder={placeholder}
        disabled
      />
    ) : (
      <FormControl
        {...input}
        id={id}
        type={type}
        placeholder={placeholder}
      />
    )}

    {(touched &&
      ((error && <span className="error-block">{error}</span>) ||
        (warning && (
          <span className="warning-block">{warning}</span>
        )))) || <HelpBlock>{helpBlock}</HelpBlock>}
  </div>
)

@connect((store) => {
  return {
    loading: store.loading
  }
})
class LoadingButton extends Component {
  render() {
    const { loading, show } = this.props

    const showLoading =
      loading.loading.common && (show === undefined || show)

    return (
      <div className="loading-btn-container">
        {showLoading ? <span>Loading ...</span> : null}
      </div>
    )
  }
}

LoadingButton.propTypes = {
  loading: PropTypes.object,
  show: PropTypes.bool
}

@connect((store) => {
  return {
    banner: store.notifications.banner
  }
})
class Banner extends Component {
  close() {
    const { dispatch } = this.props
    dispatch({
      type: Constants.BANNER_NOTIFICATION,
      payload: { fail: false, success: false, message: '' }
    })
  }

  render() {
    const { message, banner, bsClass } = this.props
    let className = banner.fail ? 'fail' : 'success'
    let displayMessage =
      banner.message !== '' ? banner.message : message

    return (
      <div>
        {banner.fail || banner.success ? (
          <div
            className={`banner ${className} ${bsClass}`}
            onClick={(dispatch) => {
              this.close(dispatch)
            }}
          >
            <span className="message">{displayMessage}</span>
            <span className="cross">x</span>
          </div>
        ) : null}
      </div>
    )
  }
}

Banner.propTypes = {
  dispatch: PropTypes.func
}

export { BannerRightSection, Banner, LoadingButton, renderFieldText }
