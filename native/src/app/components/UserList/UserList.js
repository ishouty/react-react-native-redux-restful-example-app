import React from "react"
import {View, Text, StyleSheet, RefreshControl, FlatList} from "react-native"
import Layout from "../../constants/Layout"
import Colors from "../../constants/Colors"
import Fonts from "../../constants/Fonts"
import Button from "../Common/Button/Button"
import {CommonText} from "../../constants/Text"
import LoadingSpinner from "react-native-loading-spinner-overlay"
import {getUsersList} from "../../actions/appActions"
import {capitalizedText, dropDownFailedAlert, isEven} from "../../utils/GeneralUtil"
import DropdownAlert from "react-native-dropdownalert"
import ProfileAvatar from "../Common/ProfileAvatar/ProfileAvatar"
import * as Communications from "react-native-communications"
import PropTypes from "prop-types"

class UserList extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            refreshing: false,
            page: 1
        }
    }


    componentWillUnmount () {

        //unsubscribe content which is not needed

    }

    _keyExtractor = (item, index) => {
        return index.toString()
    }

    _onRefresh = () => {
        const {dispatch, condition} = this.props
        this.setState({refreshing: true, page: 1})

        const callback = () => {
            this.setState({refreshing: false})
        }

        dispatch(getUsersList((msg)=> { dropDownFailedAlert(this.dropdown, msg)},null, null, condition)).then(response => {
            this.setState({refreshing: false})
        })

    }

    _loadMore = () => {
        const {dispatch, data, condition} = this.props
        let page = this.state.page + 1
        this.setState({page: page})

        dispatch(getUsersList((msg)=> { dropDownFailedAlert(this.dropdown, msg)},page, null, condition)).then(response => {
            this.setState({refreshing: false})
        })

    }

    _renderItem = ({item, index}) => {

        const { imageDisplay } = this.props
        let newStyles = isEven(index+1) ? [styles.item, styles.gray] : [styles.item, styles.white]

        return (
            <View style={newStyles}>

                <View style={imageDisplay === "small" ? {flexDirection: "row"} : {}}>
                    <ProfileAvatar sourceImage={{uri: item.picture.large}} size={this.props.imageDisplay} />
                    {item.name && <Text style={[{marginLeft: 5},styles.summaryItem]}>{capitalizedText(item.name.title)} {capitalizedText(item.name.first)} {capitalizedText(item.name.last)}</Text> }
                </View>

                {item.gender && <Text style={styles.titleText}>{CommonText.gender} {capitalizedText(item.gender)}</Text>}
                {item.email && <Text style={styles.titleText}>{CommonText.email} {item.email}</Text>}
                {item.dob.age && <Text style={styles.titleText}>{CommonText.age} {item.dob.age}</Text>}

                { item.phone && <Button title={CommonText.call} bsClass={{button: styles.buttonContact }} callback={()=>{
                    Communications.phonecall(item.phone, true)
                }}/> }


            </View>
        )

    }

    render() {

        const {data} = this.props
        return (
            <View style={styles.container}>
                <LoadingSpinner visible={false}/>

                <FlatList
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this._onRefresh}
                            tintColor={Colors.black}
                            title={CommonText.loading}
                            titleColor={Colors.black}
                            colors={[Colors.lightBlue, Colors.blue]}
                            progressBackgroundColor={Colors.white}
                        />
                    }
                    data={data}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                    refreshing={true}
                    onEndReachedThreshold={0}
                    onEndReached={this._loadMore}
                />

                <DropdownAlert ref={ref => this.dropdown = ref}/>
            </View>
        )

    }

}

const styles = new StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    item: {
        marginBottom: 10,
        backgroundColor: Colors.lightGray,
        width: Layout.width * .8,
        padding: 10,
        borderRadius: 5
    },
    gray: {
        backgroundColor: Colors.gray
    },
    white: {
        backgroundColor: Colors.white
    },
    summaryItem: {
        fontFamily: Fonts.montserratBold,
        marginBottom: 10,
        color: Colors.black
    },
    titleText: {
        color: Colors.black,
        fontFamily: Fonts.montserratRegular
    },
    buttonContact: {
        marginTop: 5
    }

})

UserList.propTypes = {
    data: PropTypes.array.isRequired
}

export default UserList
