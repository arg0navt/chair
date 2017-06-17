import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { css } from 'aphrodite/no-important'
import Hammer from 'react-hammerjs';
import { Tab } from '../../ui/panels/tab'
import g from '../../style/global'
import a from '../../style/additionally'

class ControlArmchairs extends Component{
    constructor(props){
        super(props)
        this.state = {
            num:0
        }
    }
    plus(){
        this.setState({
            num: this.state.num+1
        })
    }
    minus(){
        this.setState({
            num: this.state.num > 0 ? this.state.num-1 : this.state.num
        })
    }
    render(){
        return(
            <div className={css(g.flex, a.armchair, a.padding)}>
                <div className={css(a.armchairWrap)}>
                    <p className={css(a.armchairText)}>Кол-во кресел в зале</p>
                    <div className={css(g.flex, a.wrapButton)}>
                        <div className={css(g.flex, a.buttonNum, a.plus)} onClick={this.minus.bind(this)}><img className={css(a.numIcon)} src={'/img/numMinus.png'} alt=""/></div>
                        <p className={css(a.textNum)}>{this.state.num}</p>
                        <div className={css(g.flex, a.buttonNum, a.minus)} onClick={this.plus.bind(this)}><img className={css(a.numIcon)} src={'/img/numPlus.png'} alt=""/></div>
                    </div>
                </div>
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