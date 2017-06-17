import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { css } from 'aphrodite/no-important'
import { Tab } from '../../ui/panels/tab'
import ItemHairdresser from '../../ui/item'
import { Link } from 'react-router';
import g from '../../style/global'
import a from '../../style/additionally'

class AddHairdresser extends Component{
    constructor(props){
        super(props)
        this.state = {
            firstName:'',
            lastName:'',
            login:'',
            password:''
        }
    }
    change(key, event){
        const items = this.state[key];
        this.state[key] = event.target.value;
        this.setState({
            items,
        })
    }
    render(){
        return(
            <div className={css(a.formAdd, a.padding,)}>
                <form>
                <div className='inputBlock'>
                    <input className='inputInput' type="text" id="firstName" ref={(firstName) => this.firstName = firstName} value={this.state.firstName} onChange={this.change.bind(this, 'firstName')} />
                    <label htmlFor="firstName" className={this.state.firstName != "" ? 'inputLabel active' : 'inputLabel'}>Имя</label>
                </div>
                <div className='inputBlock'>
                    <input className='inputInput' type="text" id="lastName" ref={(lastName) => this.lastName = lastName} value={this.state.lastName} onChange={this.change.bind(this, 'lastName')} />
                    <label htmlFor="lastName" className={this.state.lastName != "" ? 'inputLabel active' : 'inputLabel'}>Фамилия</label>
                </div>
                <div className='inputBlock'>
                    <input className='inputInput' type="text" id="login" ref={(login) => this.login = login} value={this.state.login} onChange={this.change.bind(this, 'login')} />
                    <label htmlFor="login" className={this.state.login != "" ? 'inputLabel active' : 'inputLabel'}>Логин</label>
                </div>
                <div className='inputBlock'>
                    <input className='inputInput' type="password" id="" ref={(password) => this.password = password} value={this.state.password} onChange={this.change.bind(this, 'password')} />
                    <label htmlFor="" className={this.state.password != "" ? 'inputLabel active' : 'inputLabel'}>Пароль</label>
                </div>
                <button className={css(g.flex, a.buttonAdd, a.noBorder)}><p className={css(a.buttonText)}><img className={css(a.buttonAddIcon)} src={'/img/add.png'} alt=""/>Добавить нового парикмахера</p></button>
                </form>
            </div>
        )
    }
}

export default connect(
  state => ({
    Store: state
  }),
  dispatch =>({})
)(AddHairdresser)