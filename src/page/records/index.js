import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { css } from 'aphrodite/no-important'
import Hammer from 'react-hammerjs';
import Tab from '../../ui/panels/tab'
import { setting } from '../../config'
import g from '../../style/global'
import a from '../../style/additionally'

const links = [
    {text:'Текущие',a:`${setting.site}records/current`},
    {text:'История',a:`${setting.site}records/history`}
]
const array = [
    {photo:`${setting.site}img/ava1.png`, name:'Елена Дементьева'},
    {photo:`${setting.site}img/ava2.png`, name:'Надежда Соколова'},
    {photo:`${setting.site}img/ava3.png`, name:'Наталья Рязанова'},
    {photo:`${setting.site}img/ava4.png`, name:'Вероника Осипова'},
    {photo:`${setting.site}img/ava5.png`, name:'Евгения Петрова'},
]

class Records extends Component{
    render(){
        return(
            <div>
                <Tab active={`${setting.site}records`} tab={links} />
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
)(Records)