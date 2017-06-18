import React, { Component } from 'react'
import { css } from 'aphrodite/no-important'
import { connect } from 'react-redux'
import { Link } from 'react-router';
import g from '../../style/global'
import a from '../../style/additionally'

class Tab extends Component {
    render(){
        return (
            <div className={css(g.flex, a.tab)}>
                {this.props.tab.map((item, index) => <div key={index} className={css(g.flex, a.tabItem)}><Link to={item.a} className={css(g.flex, a.linkWrap)}><Link activeClassName='activeTabLink' className={this.props.Store.routing.locationBeforeTransitions.pathname == this.props.active && index == 0 ? css(a.linkTab, a.activeTabLink) : css(a.linkTab)} to={item.a}>{item.text}</Link></Link></div>)}
            </div>
        )
    }
}
export default connect(
  state => ({
    Store: state
  }),
  dispatch =>({})
)(Tab)
