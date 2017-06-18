import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { css } from 'aphrodite/no-important'
import { Tab } from '../../ui/panels/tab'
import ItemHairdresser from '../../ui/item'
import { Link } from 'react-router';
import g from '../../style/global'
import l from '../../style/login'
import axios  from 'axios';
import cookie from 'react-cookies'
import { Api } from '../../config'

class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
            login:'',
            password:'',
            error:false,
            errorText:''
        }
    }
    change(key, event){
        const items = this.state[key];
        this.state[key] = event.target.value;
        this.setState({
            items,
        })
    }
    error(text){
        this.setState({
            error:true,
            errorText:text
        })
        setTimeout(()=>{
            this.setState({
                error:false,
                errorText:''
            })
        },4000)
    }
    logging(){
        if (this.state.login == '' || this.state.password == ''){
            this.error('Введите логин или пароль')
        } else {
            axios.get(Api('Auth', 'auth', `"login":"${this.state.login}","password":"${this.state.password}","token":"${this.props.Store.user.token}"`))
            .then((response) => {
                if (response.data[0].result != undefined && response.data[0].result != null){
                    this.props.logging(response.data[0].result.user)
                    browserHistory.push('/entry')
                } else {
                    this.error(response.data[0].error.message)
                }
            })
            .catch((error) => {console.log(error)})
        }
    }
    render(){
        return(
            <div className={css(g.flex, l.loginWrap)}>
                <div className={css(g.flex, l.login)}>
                    <div>
                        <p className={css(l.loginText)}>Для входа в приложение, пожалуйста, Авторизуйтесь</p>
                        <div className={css(l.form)}>
                            <input type="text" className={css(l.input, l.loginInput)} placeholder="Логин" onChange={this.change.bind(this, 'login')} />
                            <input type="password" className={css(l.input, l.pasInput)} placeholder="Пароль" onChange={this.change.bind(this, 'password')} />
                            <button onClick={this.logging.bind(this)} className={css(l.button)}>Войти</button>
                        </div>
                    </div>
                </div>
                {this.state.error == true ? (
                    <div className={css(g.flex, l.popupWrap)}>
                    <div className={css(l.error)}>
                        <p className={css(l.errorText)}>{this.state.errorText}</p>
                    </div>
                </div>
                ) : (<div></div>)}
            </div>
        )
    }
}

export default connect(
  state => ({
    Store: state
  }),
  dispatch =>({
      logging: (item) => {dispatch({type:'LOGGING',payload:item})}
  })
)(Login)