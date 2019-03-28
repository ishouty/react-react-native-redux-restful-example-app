import "../../assets/less/EmptyPlaceholder/index.less"

import React, {Component} from "react"
import PropTypes from "prop-types"

class EmptyPlaceholder extends Component {

    render() {

        const {imageUrl, helpTextTitle, helpTextDetail} = this.props

        return (
            <div className="empty-placeholder">
                <div className="img-container"><img src={imageUrl}/></div>
                <div className="help-title">{helpTextTitle}</div>
                <div className="help-detail">{helpTextDetail}</div>
            </div>
        )

    }

}

EmptyPlaceholder.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    helpTextTitle: PropTypes.string.isRequired,
    helpTextDetail: PropTypes.string.isRequired
}

export default EmptyPlaceholder
