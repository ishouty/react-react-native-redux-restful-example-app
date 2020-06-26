import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from './../components/Layout/App/Header/Header'

export default class MainLayout extends Component {
  render() {
    const { main } = this.props
    return (
      <div id="main-app-layout">
        <Header />
        <div id="main-app">
          <div>{main ? main : this.props.children}</div>
        </div>
      </div>
    )
  }
}
