import React from 'react'
import { View, StyleSheet } from 'react-native'
import { getUsersList } from '../../actions/appActions'
import { navigationText } from '../../constants/Text'
import { connect } from 'react-redux'
import UserList from '../UserList/UserList'
import { dropDownFailedAlert } from '../../utils/GeneralUtil'
import PropTypes from 'prop-types'

const mapStateToProps = (state) => {
  return {
    tabs: state.tabs,
    users: state.users.users
  }
}

class AllGendersScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: navigationText.all
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
        'all'
      )
    )
  }

  render() {
    const { dispatch, navigation, users } = this.props

    return (
      <View style={styles.container}>
        <UserList
          dispatch={dispatch}
          data={users}
          condition={'all'}
          imageDisplay={'small'}
        />
      </View>
    )
  }
}

AllGendersScreen.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default connect(mapStateToProps)(AllGendersScreen)

const styles = new StyleSheet.create({
  container: {
    flex: 1
  }
})
