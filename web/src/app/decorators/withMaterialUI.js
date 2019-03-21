import React, { Component } from 'react'

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

export default function withMaterialUI(ComposedComponent) {
  return class MaterialUI extends Component {
    /*
     For more details: https://github.com/callemall/material-ui#usage
     Pass material-ui theme through child context
     We are doing this here so we don't have to do it anywhere else.
     */
    static childContextTypes = {
      muiTheme: React.PropTypes.object
    }


    getChildContext() {
      return {
        muiTheme: getMuiTheme(lightBaseTheme, {
          appBar: {
            height: 50,
          }
        })
      }
    }

    render() {
      const { context, ...other } = this.props
      return <ComposedComponent {...other} />
    }
  }
}
