import React, {Component} from "react"
import {connect} from "react-redux"
import {getUsersList, DEFAULT_PAGE_SIZE, DEFAULT_START_PAGE} from "../../actions/users"
import {renderUsersList} from "../../utils/UsersUtils"
import PropTypes from 'prop-types'
import emptyUserListImage from '../../assets/images/layout/welcome.jpg'
import {MatchedQuestionsText} from "../../constants/text/text"

@connect((store) => {
    return {
        users: store.users.users,
        page: store.users.usersPage,
        totalPages: store.users.usersTotalPages
    }
})

class Users extends Component {

    render() {

        const {dispatch, filter, users, page, totalPages} = this.props

        return renderUsersList(users, (page) => getUsersList(page, DEFAULT_PAGE_SIZE, filter), dispatch,
            emptyUserListImage, MatchedQuestionsText.emptyHelpTitle, MatchedQuestionsText.emptyHelpDetail,
            page, totalPages, true)

    }

}

Users.propTypes = {
    "users": PropTypes.object
}

export default Users