import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { css } from 'aphrodite/no-important'
import { Tab } from '../../ui/panels/tab'
import ItemHairdresser from '../../ui/item'
import { Link } from 'react-router';
import g from '../../style/global'
import a from '../../style/additionally'

const array = [
    {photo:'/img/ava1.png', name:'Елена Дементьева', login:'akonstantinova'},
    {photo:'/img/ava2.png', name:'Надежда Соколова', login:'edementeva'},
    {photo:'/img/ava3.png', name:'Наталья Рязанова', login:'nsokolova'},
    {photo:'/img/ava4.png', name:'Вероника Осипова', login:'nryazanova'},
    {photo:'/img/ava5.png', name:'Евгения Петрова', login:'vosipova'},
    {photo:'/img/ava1.png', name:'Елена Дементьева', login:'akonstantinova'},
    {photo:'/img/ava2.png', name:'Надежда Соколова', login:'edementeva'},
    {photo:'/img/ava3.png', name:'Наталья Рязанова', login:'nsokolova'},
    {photo:'/img/ava4.png', name:'Вероника Осипова', login:'nryazanova'},
    {photo:'/img/ava5.png', name:'Евгения Петрова', login:'vosipova'},
    {photo:'/img/ava1.png', name:'Елена Дементьева', login:'akonstantinova'},
    {photo:'/img/ava2.png', name:'Надежда Соколова', login:'edementeva'},
    {photo:'/img/ava3.png', name:'Наталья Рязанова', login:'nsokolova'},
    {photo:'/img/ava4.png', name:'Вероника Осипова', login:'nryazanova'},
    {photo:'/img/ava5.png', name:'Евгения Петрова', login:'vosipova'},
]

class ControlHairdresser extends Component{
    render(){
        return(
            <div className={css(a.padding)}>
                {array.map((item, index) => <ItemHairdresser key={index} item={item}/>)}
                <div className={css(a.shadow)}></div>
                <Link className={css(g.flex, a.buttonAdd)} to="/control/hairdresser/add"><p className={css(a.buttonText)}><img className={css(a.buttonAddIcon)} src={'/img/add.png'} alt=""/>Добавить нового парикмахера</p></Link>
            </div>
        )
    }
}

export default connect(
  state => ({
    Store: state
  }),
  dispatch =>({})
)(ControlHairdresser)