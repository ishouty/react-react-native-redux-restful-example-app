import React from 'react'
import { View, StyleSheet } from 'react-native'
import { navigationText } from '../../constants/Text'
import { connect } from 'react-redux'
import UserList from '../UserList/UserList'
import { dropDownFailedAlert } from '../../utils/GeneralUtil'
import { getUsersList } from '../../actions/appActions'
import PropTypes from 'prop-types'

const mapStateToProps = (state) => {
  return {
    tabs: state.tabs,
    users: state.users.users
  }
}

class MaleScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: navigationText.males
  }

  componentDidMount() {
    const { dispatch } = this.props

    dispatch(
      getUsersList(
        (msg) => {
          dropDownFailedAlert(this.dropdown, msg)
        },
        null,
        null,
        'male'
      )
    )
  }

  render() {
    const { dispatch, users } = this.props

    return (
      <View style={styles.container}>
        <UserList
          dispatch={dispatch}
          data={users}
          condition={'male'}
          imageDisplay={'small'}
        />
      </View>
    )
  }
}

MaleScreen.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default connect(mapStateToProps)(MaleScreen)

const styles = new StyleSheet.create({
  container: {
    flex: 1
  }
})
