import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import PropTypes from 'prop-types'
//Components
import Navigation from './../../Navigation/Navigation'

@connect((store) => {
  return {
    user: store.user,
    navigation: store.navigation.navigationLinks.links
  }
})
class Header extends Component {
  render() {
    const { navigation } = this.props

    return (
      <div className="header-container">
        <Row className="header-body">
          <Navigation navigationLinks={navigation} />
        </Row>
      </div>
    )
  }
}

export default Header
