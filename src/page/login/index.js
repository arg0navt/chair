import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { css } from 'aphrodite/no-important'
import { Tab } from '../../ui/panels/tab'
import ItemHairdresser from '../../ui/item'
import { Link } from 'react-router';
import g from '../../style/global'
import l from '../../style/login'

class Login extends Component{
    render(){
        return(
            <div className={css(g.flex, l.loginWrap)}>
                <div className={css(g.flex, l.login)}>
                    <div>
                        <p className={css(l.loginText)}>Для входа в приложение, пожалуйста, Авторизуйтесь</p>
                        <form className={css(l.form)}>
                            <input type="text" className={css(l.input, l.loginInput)} placeholder="Логин" />
                            <input type="text" className={css(l.input, l.pasInput)} placeholder="Пароль" />
                            <button className={css(l.button)}>Войти</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(
  state => ({
    Store: state
  }),
  dispatch =>({})
)(Login)