import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { css } from 'aphrodite/no-important'
import { Tab } from '../../ui/panels/tab'
import { ItemHistory } from '../../ui/item'
import { setting } from '../../config'
import g from '../../style/global'
import a from '../../style/additionally'

const links = [
    {text:'Текущие',a:`${setting.site}records`},
    {text:'История',a:`${setting.site}records_history`}
]
const array = [
    {photo:`${setting.site}img/ava1.png`, name:'Елена Дементьева', status:'reade'},
    {photo:`${setting.site}img/ava2.png`, name:'Надежда Соколова', status:'canceled'},
    {photo:`${setting.site}img/ava3.png`, name:'Наталья Рязанова', status:'reade'},
    {photo:`${setting.site}img/ava4.png`, name:'Вероника Осипова', status:'canceled'},
    {photo:`${setting.site}img/ava5.png`, name:'Евгения Петрова', status:'reade'},
]

class RecordsCurrent extends Component{
    render(){
        return(
            <div  className={css(a.padding)}>
                {array.map((item, index) => (
                    <ItemHistory key={index} item={item} />
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