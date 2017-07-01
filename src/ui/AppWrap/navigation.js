import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { css } from 'aphrodite/no-important'
import Hammer from 'react-hammerjs';
import { setting } from '../../config'
import g from '../../style/global'
import n from '../../style/navigation'
import { Link } from 'react-router';

const nav = [
    {
        name:'Календарь',
        href:`${setting.site}entry`,
        icon:`${setting.site}img/calendar.png`
    },
    {
        name:'Мои записи',
        href:`${setting.site}control`,
        icon:`${setting.site}img/book-2.png`
    },
    {
        name:'Управление',
        href:`${setting.site}records`,
        icon:`${setting.site}img/compose.png`
    },
    {
        name:'Помощь',
        href:`${setting.site}`,
        icon:`${setting.site}img/-.png`
    }
]

class Navigation extends Component{
    swipe(ev){
        if(ev.deltaX < 0){
            this.props.toggleNav()
        } 
    }
    hide(){
        this.props.toggleNav()
    }
    render(){
        return(
            <div>
                <Hammer onSwipe={this.swipe.bind(this)}>
                <div>
                <div className={css(g.flex, n.nav)} style={this.props.Store.nav == false ? {left:-1052} : {left:0}}>
                    <div className={css(n.navWrap)}>
                        <div className={css(n.profil)}>
                            <div className={css(n.avatar)}><img className={css(n.avatarPich)} src={`${setting.site}img/avatar.png`} alt=""/></div>
                            <p className={css(n.name)}>Елена Петрова</p>
                        </div>
                        <div className={css(n.list)}>
                            {nav.map((item, index) => {
                                return (
                                    <Link key={index} to={item.href} className={css(n.item)} onClick={this.hide.bind(this)}>
                                        <div className={css(g.flex, n.icon)}><img className={css(n.iconimg, n[`icon${index+1}`])} src={item.icon} alt={item.name}/></div>
                                        <p className={css(n.text)}>{item.name}</p>
                                    </Link>
                                )}
                            )}
                        </div>
                    </div>
                </div>
                <div onClick={this.hide.bind(this)} className={css(n.shadow)} style={this.props.Store.nav == false ? {visibility: 'hidden'} : {visibility: 'visible'}}></div>
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
  dispatch =>({
       toggleNav: () => {dispatch({type:'TOGGLE_NAV'})},
  })
)(Navigation)