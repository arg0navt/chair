import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { css } from 'aphrodite/no-important'
import Hammer from 'react-hammerjs';
import { Tab } from '../../ui/panels/tab'
import g from '../../style/global'
import a from '../../style/additionally'

class ControlArmchairs extends Component{
    render(){
        return(
            <div>
            </div>
        )
    }
}

export default connect(
  state => ({
    Store: state
  }),
  dispatch =>({})
)(ControlArmchairs)