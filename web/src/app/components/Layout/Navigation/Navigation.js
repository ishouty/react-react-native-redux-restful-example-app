import React, {Component} from "react"
import {Col} from "react-bootstrap"
import {Link} from "react-router"
import PropTypes from 'prop-types'

class Navigation extends Component {

    render() {
        const {navigationLinks} = this.props

        let navigationItems = navigationLinks.map((link, index) => {
            return (
                <li key={index}>
                    <Link to={link.href} activeClassName='active' className={link.className}>
                        { link.icon && <i className={`fa ${link.icon}` }  aria-hidden="true"></i> }
                        <span>{link.title}</span>
                    </Link>
                </li>
            )
        })

        return (
            <Col sm={7} id="main-navigation" className="navigation-container">
                <ul>
                    {navigationItems}
                </ul>
            </Col>
        )
    }
}

Navigation.propTypes = {
    "navigationLinks" : PropTypes.array.isRequired
}

export default Navigation