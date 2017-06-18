import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { css } from 'aphrodite/no-important'
import Hammer from 'react-hammerjs';
import Tab from '../../ui/panels/tab'
import g from '../../style/global'
import a from '../../style/additionally'

const links = [
    {text:'Парикмахеры',a:'/control/hairdresser'},
    {text:'Кресла',a:'/control/armchairs'}
]

class Control extends Component{
    render(){
        return(
            <div>
                {this.props.Store.routing.locationBeforeTransitions.pathname != '/control/hairdresser/add' ? <Tab active={'/control'} tab={links} /> : <div></div>}
                {this.props.children}
            </div>
        )
    }
}

export default connect(
  state => ({
    Store: state
  }),
  dispatch =>({})
)(Control)