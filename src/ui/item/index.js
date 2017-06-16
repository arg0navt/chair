import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { css } from 'aphrodite/no-important'
import { Tab } from '../../ui/panels/tab'
import Hammer from 'react-hammerjs';
import g from '../../style/global'
import a from '../../style/additionally'

export const Item = ({item}) => (
    <div className={css(g.flex, a.item)}>
        <div className={css(g.flex, a.itemPhoto)}>
            <div className={css(a.avatar)}>
                <img className={css(a.avatarPich)} src={item.photo} alt=""/>
            </div>
        </div>
        <div className={css(g.flex, a.itemData)}>
            <div>
                <p className={css(a.itemName)}>{item.name}</p>
                <div className={css(g.flex, a.buttonControll)}>
                    <div className={css(g.flex, a.button, a.buttonReady)}><img className={css(a.iconReady)} src={'/img/buttinIcon1.png'} alt=""/>Готово</div>
                    <div className={css(g.flex, a.button, a.buttonAbolish)}><img className={css(a.iconAbolish)} src={'/img/buttinIcon2.png'} alt=""/>Отменить</div>
                </div>
            </div>
        </div>
    </div>
)
export const ItemHistory = ({item}) => {
    let status = {}
    item.status == 'reade' ? status = {color:'#fac054', text:'Готово'} : status = {color:'#f35252', text:'Отменен'}
    return (
       
    <div className={css(g.flex, a.item)}>
        <div className={css(g.flex, a.itemPhoto)}>
            <div className={css(a.avatar)}>
                <img className={css(a.avatarPich)} src={item.photo} alt=""/>
            </div>
        </div>
        <div className={css(g.flex, a.itemData)}>
            <div className={css(a.wrapData)}>
                <div className={css(a.status)} style={{color:status.color}}><div className={css(a.circleStatus)} style={{background:status.color}}></div>{status.text}</div>
                <p className={css(a.itemName)}>{item.name}</p>
            </div>
        </div>
    </div>
)}

class ItemHairdresser extends Component{
    constructor(props){
        super(props)
        this.state = {
            x:0
        }
    }
    swipe(ev){
        if (ev.deltaX < 0){
            this.setState({
                x:-50
            })
        } else  {
            this.setState({
                x:0
            })
        }
    }
    render(){
        return(
            <Hammer onSwipe={this.swipe.bind(this)}> 
                <div className={css(a.wrapItem)}>
                    <div className={css(g.flex, a.item, a.itemMin, a.itemAbsolute)} style={{left:this.state.x}}>
                        <div className={css(g.flex, a.itemPhoto, a.itemMin)}>
                            <div className={css(a.avatar)}>
                                <img className={css(a.avatarPich)} src={this.props.item.photo} alt=""/>
                            </div>
                        </div>
                        <div className={css(g.flex, a.itemData, a.itemMin, a.itemBorder)}>
                            <div>
                                <p className={css(a.itemName)}>{this.props.item.name}</p>
                                <p className={css(a.itemLogin)}>{this.props.item.login}</p>
                            </div>
                        </div>
                    </div>
                    <div className={css(g.flex, a.deleteBlock)}>
                        <img className={css(a.deleteIcon)} src={'/img/delete.png'} alt=""/>
                    </div>
                </div>
            </Hammer>
        )
    }
}
export default connect(
  state => ({
    Store: state
  }),
  dispatch =>({})
)(ItemHairdresser)