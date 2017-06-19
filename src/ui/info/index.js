import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import moment from 'moment'
import _ from 'underscore'
import { css } from 'aphrodite/no-important';
import g from '../../style/global'
import t from '../../style/table'
import Days from '../../ui/panels/days'
import { FilterTable } from '../../ui/panels/filterTable'

const timePx = ['09:00','09:30','10:00','10:30','11:00','11:30','12:00','12:30','13:00','13:30','14:00','14:30','15:00','15:30','16:00','16:30','17:00','17:30','18:00','18:30','19:00','19:30','20:00','20:30','21:00','21:30','22:00','22:30','23:00']

class Info extends Component{
    constructor(props){
        super(props)
        this.state = {
            start: _.indexOf(timePx, this.props.timeStart) * 75 + 1,
            end: _.indexOf(timePx, this.props.timeEnd) * 75 - 5,
            height: 70,
            background: '#8eae55'
        }
    }
    componentWillMount(){
        this.setState({
            height: this.props.status != 'free' ? this.state.end - this.state.start : 70,
            background: this.props.status == 'absent' ? '#323136' : this.props.status == 'busy' ? '#fac054' : this.props.status == 'free' ? '#8eae55' : '#8eae55'
        })
    }
    view(){
        this.props.toggleView()
        this.props.pushDetail(this.props.item)
    }
    render(){
        return(
            <div onClick={this.view.bind(this)} style={{top:this.state.start,height:this.state.height,background:this.state.background}} className={css(t.info)}>
                <p className={css(t.infoName)} style={this.props.status == "absent" ? {color:'#fff'} : {color:'#37471a'}}>{this.props.timeStart}</p>
            </div>
        )
    }
}
export default connect(
  state => ({
    Store: state
  }),
  dispatch =>({
      toggleView: () => {dispatch({type:'TOGGLE_DETAIL'})},
      pushDetail: (item) => {dispatch({type:'PUSH_DETAIL',payload:item})},
  })
)(Info)