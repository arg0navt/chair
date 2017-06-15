import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import Hammer from 'react-hammerjs';
import { css } from 'aphrodite/no-important'
import { IconNav, IconAdd } from '../icons'
import h from '../../style/header'
import g from '../../style/global'

class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            x:0,
            z:0,
            r:0,
            max:0
        }
    }
    start(ev){
        this.setState({x: this.state.z})
    }
    pan(ev){
        if(this.state.z + ev.deltaX < 8 && this.state.z + ev.deltaX > this.state.max){
            this.setState({x: this.state.z + ev.deltaX})
        }
    }
    end(ev){
        const itemWidth = document.querySelector('.itemDay').clientWidth
        const newX = itemWidth * Math.round(this.state.x/itemWidth)
        this.setState({x: newX, z:newX})
    }
    componentDidMount(){
        const n = (document.querySelectorAll('.itemDay').length - 7) * document.querySelector('.itemDay').clientWidth
        this.setState({
            max:-n
        })
    }
    render(){
        return(
            <div className={css(h.days)}>
                    <Hammer onPanStart={this.start.bind(this)} onPan={this.pan.bind(this)} onPanEnd={this.end.bind(this)} className={css(h.list)} style={{transform: `translate3d(${this.state.x}px, 0px, 0px)`}}>
                    <div>
                        <div className="itemDay">
                            <p className={css(h.text)}>апр<span className={css(h.span, h.actionSpan)}>10</span>пн</p>
                            <div className={css(h.border, h.action)}></div>
                        </div>
                        <div className="itemDay">
                            <p className={css(h.text)}>апр<span className={css(h.span)}>11</span>вт</p>
                            <div className={css(h.border)}></div>
                        </div>
                        <div className="itemDay">
                            <p className={css(h.text)}>апр<span className={css(h.span)}>12</span>ср</p>
                            <div className={css(h.border)}></div>
                        </div>
                        <div className="itemDay">
                            <p className={css(h.text)}>апр<span className={css(h.span)}>13</span>чт</p>
                            <div className={css(h.border)}></div>
                        </div>
                        <div className="itemDay">
                            <p className={css(h.text)}>апр<span className={css(h.span)}>14</span>пт</p>
                            <div className={css(h.border)}></div>
                        </div>
                        <div className="itemDay">
                            <p className={css(h.text)}>апр<span className={css(h.span)}>15</span>сб</p>
                            <div className={css(h.border)}></div>
                        </div>
                        <div className="itemDay">
                            <p className={css(h.text)}>апр<span className={css(h.span)}>16</span>вс</p>
                            <div className={css(h.border)}></div>
                        </div>
                        <div className="itemDay">
                            <p className={css(h.text)}>апр<span className={css(h.span)}>17</span>пн</p>
                            <div className={css(h.border)}></div>
                        </div>
                        <div className="itemDay">
                            <p className={css(h.text)}>апр<span className={css(h.span)}>18</span>вт</p>
                            <div className={css(h.border)}></div>
                        </div>
                        <div className="itemDay">
                            <p className={css(h.text)}>апр<span className={css(h.span)}>19</span>ср</p>
                            <div className={css(h.border)}></div>
                        </div>
                        <div className="itemDay">
                            <p className={css(h.text)}>апр<span className={css(h.span)}>20</span>чт</p>
                            <div className={css(h.border)}></div>
                        </div>
                        </div>
                    </Hammer>
                </div>
        )
    }
}

export default connect(
  state => ({
    Store: state
  }),
  dispatch =>({})
)(Home)