import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { css } from 'aphrodite/no-important'
import Hammer from 'react-hammerjs';
import { setting } from '../../config'
import Tab from '../../ui/panels/tab'
import g from '../../style/global'
import a from '../../style/additionally'

const links = [
    {text:'Парикмахеры',a:`${setting.site}control/hairdresser`},
    {text:'Кресла',a:`${setting.site}control/armchairs`}
]

class Control extends Component{
    render(){
        return(
            <div>
                {this.props.Store.routing.locationBeforeTransitions.pathname != `${setting.site}control/hairdresser/add` ? <Tab active={`${setting.site}control`} tab={links} /> : <div></div>}
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