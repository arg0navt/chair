import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { css } from 'aphrodite/no-important'
import { Tab } from '../../ui/panels/tab'
import { Item } from '../../ui/item'
import g from '../../style/global'
import a from '../../style/additionally'

const links = [
    {text:'Текущие',a:'/records'},
    {text:'История',a:'/records_history'}
]
const array = [
    {photo:'/img/ava1.png', name:'Елена Дементьева'},
    {photo:'/img/ava2.png', name:'Надежда Соколова'},
    {photo:'/img/ava3.png', name:'Наталья Рязанова'},
    {photo:'/img/ava4.png', name:'Вероника Осипова'},
    {photo:'/img/ava5.png', name:'Евгения Петрова'},
]

class RecordsCurrent extends Component{
    render(){
        return(
            <div>
                {array.map((item, index) => (
                    <Item key={index} item={item} />
                ))}
            </div>
        )
    }
}

export default connect(
  state => ({
    Store: state
  }),
  dispatch =>({})
)(RecordsCurrent)