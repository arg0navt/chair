import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import Hammer from 'react-hammerjs';
import { css } from 'aphrodite/no-important'
import { IconNav, IconAdd } from '../icons'
import { setting } from '../../config'
import h from '../../style/header'
import g from '../../style/global'


const Top = (props) => (
    <div className={css(g.flex, h.top)}>
        <div className={css(h.openNav)} onClick={props.toggleNav}>
            <IconNav className={css(h.nav)} />
        </div>
        <div className={css(h.title)}>
            <p className={css(h.titleText)}>Запись</p>
        </div>
        <div className={css(h.add)}>
            {props.Store.routing.locationBeforeTransitions.pathname == '/entry' ? <IconAdd className={css(h.add)} />: <div></div>}
        </div>
    </div>
)

class Panel extends Component{
    openNav(){
        this.props.toggleNav()
    }
    render(){
        return(
            <div className={css(h.header)}> 
                <Top {...this.props} />
            </div>
        )
    }
}

export default connect(
  state => ({
    Store: state
  }),
  dispatch =>({
       toggleNav: () => {dispatch({type:'TOGGLE_NAV'})},
  })
)(Panel)