import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { css } from 'aphrodite/no-important'
import Hammer from 'react-hammerjs';
import { Tab } from '../../ui/panels/tab'
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

class Records extends Component{
    render(){
        return(
            <div>
                <Tab tab={links} />
                {array.map((item, index) => (
                    <div className={css(g.flex, a.item)}>
                        <div className={css(g.flex, a.itemPhoto)}>
                            <div className={css(a.avatar)}>
                                <img src={item.photo} alt=""/>
                            </div>
                        </div>
                        <div className={css(a.itemData)}>
                            <p className={css(a.itemName)}>{item.name}</p>
                            <div className={css(a.buttonControll)}>
                                <div className={css(a.button, a.buttonReady)}>Готово</div>
                                <div className={css(a.button, a.buttonAbolish)}>Отменить</div>
                            </div>
                        </div>
                    </div>
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
)(Records)