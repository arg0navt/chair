import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { css } from 'aphrodite/no-important';
import g from '../../style/global'
import Navigation from './navigation'
import Panel from '../panels/panel'

class AppWrap extends Component{
    componentDidMount(){
        this.props.Store.login == true ? browserHistory.push('/home') : browserHistory.push('/')
    }
    render(){
        return(
            <div className={css(g.app)}>
                <Navigation />
                {this.props.Store.login != false ? (
                    <div className={css(g.top)}>
                        <Panel />
                    </div>
                ) : (
                    <div></div>
                )}
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
)(AppWrap)