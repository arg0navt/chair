import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { css } from 'aphrodite/no-important'
import Hammer from 'react-hammerjs';
import g from '../../style/global'
import n from '../../style/navigation'

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
                <div className={css(g.flex, n.nav)} style={this.props.Store.nav == false ? {left:-252} : {left:0}}>
                    <div className={css(n.navWrap)}>
                        <div className={css(n.profil)}>
                            <div className={css(n.avatar)}><img className={css(n.avatarPich)} src={'/img/avatar.png'} alt=""/></div>
                            <p className={css(n.name)}>Елена Петрова</p>
                        </div>
                        <div className={css(n.list)}>
                            <div className={css(n.item)}>
                                <div className={css(g.flex, n.icon)}><img className={css(n.iconimg, n.icon1)} src={'/img/calendar.png'} alt=""/></div>
                                <p className={css(n.text)}>Календарь</p>
                            </div>
                            <div className={css(n.item)}>
                                <div className={css(g.flex,n.icon)}><img className={css(n.iconimg, n.icon2)} src={'/img/book-2.png'} alt=""/></div>
                                <p className={css(n.text)}>Мои записи</p>
                            </div>
                            <div className={css(n.item)}>
                                <div className={css(g.flex,n.icon)}><img className={css(n.iconimg, n.icon3)} src={'/img/compose.png'} alt=""/></div>
                                <p className={css(n.text)}>Управление</p>
                            </div>
                            <div className={css(n.item)}>
                                <div className={css(g.flex,n.icon)}><img className={css(n.iconimg, n.icon4)} src={'/img/-.png'} alt=""/></div>
                                <p className={css(n.text)}>Помощь</p>
                            </div>
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