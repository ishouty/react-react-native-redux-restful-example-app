import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Col } from 'react-bootstrap'

import { FILTER_USERS } from '../constants'
//components
import { Banner } from '../components/Common/Common'
import UsersList from '../components/UsersList/UsersList'

export const OPEN_ALL_USERS = 0
export const OPEN_FEMALE_USERS = 1
export const OPEN_MALE_USERS = 2
import {
  getUsersList,
  DEFAULT_START_PAGE,
  DEFAULT_PAGE_SIZE
} from '../actions/users'

@connect((store) => {
  return {
    user: store.user
  }
})
export default class Users extends Component {
  callUsersList() {
    const { route, dispatch } = this.props

    switch (route.open) {
      case OPEN_FEMALE_USERS:
        dispatch(
          getUsersList(
            DEFAULT_START_PAGE,
            DEFAULT_PAGE_SIZE,
            FILTER_USERS.gender.female
          )
        )
        break
      case OPEN_MALE_USERS:
        dispatch(
          getUsersList(
            DEFAULT_START_PAGE,
            DEFAULT_PAGE_SIZE,
            FILTER_USERS.gender.male
          )
        )
        break
      case OPEN_ALL_USERS:
      default:
        dispatch(
          getUsersList(
            DEFAULT_START_PAGE,
            DEFAULT_PAGE_SIZE,
            FILTER_USERS.default
          )
        )
        break
    }
  }

  componentWillMount() {
    this.callUsersList()
  }

  componentDidUpdate() {
    this.callUsersList()
  }

  getInnerList() {
    const { route, dispatch } = this.props

    switch (route.open) {
      case OPEN_ALL_USERS:
        return <UsersList filter={FILTER_USERS.default} />
      case OPEN_FEMALE_USERS:
        return <UsersList filter={FILTER_USERS.gender.female} />
      case OPEN_MALE_USERS:
        return <UsersList filter={FILTER_USERS.gender.male} />
      default:
        return <div />
    }
  }

  render() {
    return (
      <div className="one-col-container">
        <Col sm={12} className="main-container">
          <Banner />

          <h2>{this.props.route.title}</h2>
          {this.getInnerList()}
        </Col>
      </div>
    )
  }
}
