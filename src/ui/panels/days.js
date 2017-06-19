import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import Hammer from 'react-hammerjs';
import { css } from 'aphrodite/no-important'
import { IconNav, IconAdd } from '../icons'
import _ from 'underscore'
import moment from 'moment'
import 'moment/locale/ru'
import h from '../../style/header'
import g from '../../style/global'

class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            x:0,
            z:0,
            r:0,
            max:0,
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
    componentWillMount(){
        let n = _.range(1, 21)
        let days = n.reduce((p, item, index) => {
            moment.locale('ru')
            p.push(moment().add(index, 'days').calendar(null, {
                sameDay: 'MMM DD dd',
                nextDay: 'MMM DD dd',
                nextWeek: 'MMM DD dd',
                lastDay: 'MMM DD dd',
                lastWeek: 'MMM DD dd',
                sameElse: 'MMM DD dd'
            }))
            return p;
        }, []);
        this.setState({
            days:days
        })
    }
    render(){
        return(
            <div className={css(h.days)}>
                    <Hammer onPanStart={this.start.bind(this)} onPan={this.pan.bind(this)} onPanEnd={this.end.bind(this)} className={css(h.list)} style={{transform: `translate3d(${this.state.x}px, 0px, 0px)`}}>
                        <div>
                        {this.state.days.map((item, index) => {
                            const day = item.split(' ')
                            return (
                                <div key={index} className="itemDay">
                                    <p className={item == this.props.yesterday ? css(h.text, h.active) : css(h.text)}>{day[0]}<span className={item == this.props.yesterday ? css(h.span, h.actionSpan) : css(h.span)}>{day[1]}</span>{day[2]}</p>
                                    <div className={item == this.props.yesterday ? css(h.border, h.action) : css(h.border)}></div>
                                </div>
                            )
                        })}
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