import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import moment from 'moment'
import _ from 'underscore'
import { css } from 'aphrodite/no-important';
import g from '../../style/global'
import t from '../../style/table'
import Days from '../../ui/panels/days'
import { FilterTable } from '../../ui/panels/filterTable'
import Info from '../../ui/info'
import ChairHOC from '../../hoc/ChairHOC'
import { settingsTime } from '../../config'

const freeTime = (start, end) => {
    const idx = {
        startIndex: _.indexOf(settingsTime.timePx, start),
        endIndex: _.indexOf(settingsTime.timePx, end)
    }
    return _.filter(settingsTime.timePx, (item, index) => {return index >= idx.startIndex && index <= idx.endIndex})
}

const roundOffMinutes = (start, end) => {
    parseFloat(start) >= 30 ? start = '30' : start = '00'
    parseFloat(end) >= 30 ? end = '30' : end = '00'
    return {start:start, end:end}
}

const timePosition = (hour, minute, intervalHeight) => {
    return ((hour - 9) * intervalHeight)+(1.5*(minute/.6))
}

const Column = (items) => {
    let free = settingsTime.timePx
    const array = items.items
    return (
        <div className={css(t.itemsColumn)}>
            {array.map((item, index) => {
                const minutes = roundOffMinutes(item.format_start.slice(3,5), item.format_end.slice(3,5))
                const start = `${item.format_start.slice(0,2)}:${minutes.start}`
                const end = `${item.format_end.slice(0,2)}:${minutes.end}`
                if (item.status === 1){
                    const newArray = freeTime(start, end)
                    return <div key={index}>{newArray.map((it, ind) => <Info key={ind} timeStart={it} timeEnd={''} status={'free'} item={{start:it, end: '', number:4, name:'Елена Иванова', phone:'8 (900) 123-45-67', type:'Стрижка коротких волос', master:'Евгения Петрова'}} />)}</div>
                } else {
                    return <Info key={index} timeStart={start} timeEnd={end} status={item.status === 1 ? 'free' : item.status === 2 ? 'busy' : 'absent'} item={{start:item.format_start, end: item.format_end, number:4, name:'Елена Иванова', phone:'8 (900) 123-45-67', type:'Стрижка коротких волос', master:'Евгения Петрова'}} />
                }
            })}
        </div>
    )
}

class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            time: moment().format('LT'),
            yesterday:moment().add(0, 'days').calendar(null, {...settingsTime['YYYY-MM-DD']}),
            past: 0,
            popup:false
        }
    }
    componentDidMount(){
        let position = timePosition(this.state.time.substring(0,2), this.state.time.substring(3,5), 150)
        this.setState({past:position})
        if (this.props.Store.user.token != ''){
            setTimeout(()=>{
                this.wrap.scrollTop = this.state.past - this.wrap.clientHeight / 4
                this.props.chairGet(this.state.yesterday, this.props.Store.user.token)
            },10)
        }
    }
    componentWillReceiveProps(nextProps){
        if (nextProps.Store.user.logging != this.props.Store.user.logging){
            this.wrap.scrollTop = this.state.past - this.wrap.clientHeight / 4
            this.props.chairGet(this.state.yesterday, this.props.Store.user.token)
        }
    }
    toggle(){
        this.props.toggleView()
    }
    render(){
        return(
        <div>
            <Days time={this.state.time} yesterday={this.state.yesterday} />
            <div className={css(t.table)}>
                <div className={css(g.flex, t.numbers)}>
                    {this.props.Store.chair.length != 0 ? 
                        this.props.Store.chair.map((item, index)=>{
                            return <div key={index} className={css(t.num)}><p className={css(t.numtext)}>№{index+1}</p></div>
                        }) : <div></div>
                    }
                </div>
                <div className={css(g.flex, t.tableWrap)} id="tableWrap" ref={(wrap) => this.wrap = wrap}>
                    <div className={css(t.columTime)}>
                        {settingsTime.timePx.map((item, index)=> {
                            const h = item.slice(0,2)
                            const m = item.slice(3,5)
                            return <div key={index} className={css(g.flex, t.itemTime)}><p className={css(t.timeText)}><span className={css(t.timeSpan1)}>{h}</span><span className={css(t.timeSpan)}>{m}</span></p></div>
                        })}
                    </div>
                    <div className={css(t.itemWrap)}>
                        <div className={css(t.linWrap)}>
                            {settingsTime.timePx.map((item, index) => <div key={index} className={css(t.lin)}></div>)}
                            <div className={css(g.flex, t.items)}>
                                {this.props.Store.chair.length != 0 ? 
                                    this.props.Store.chair.map((item, index)=>{
                                        return <Column key={index} items={item} />
                                    }) : <div></div>
                                }
                            </div>
                            {this.state.past > 0 ? (
                                <div className={css(t.past)} style={{height:`${this.state.past}px`}}>
                                    <div className={css(t.pastLin)}></div>
                                </div>
                            ) : (<div></div>)}
                        </div>
                    </div>
                </div>
                <FilterTable />
                {this.props.Store.viewDetail != false ? (
                    <div>
                        <div className={css(g.flex, t.quickViewWrap)}>
                            <div className={css(t.quickViewShadow)} onClick={this.toggle.bind(this)}></div>
                            <div className={css(t.quickView)}>
                                <div className={css(t.topView)}>
                                    <p className={css(t.topViewText)}>{this.props.Store.detail.start}{this.props.Store.detail.end != '' ? `-${this.props.Store.detail.end}` : ''}</p>
                                    <div className={css(g.flex, t.nuber)}><p  className={css(t.nuberText)}>Кресло<span className={css(t.nuberSpan)}>{this.props.Store.detail.number}</span></p></div>
                                </div>
                                <div className={css(t.viewContent)}>
                                    <p className={css(t.viewContentText)}><span className={css(t.viewContentSpan)}>Тип стрижки:</span>{this.props.Store.detail.type}</p>
                                    <p className={css(t.viewContentText)}><span className={css(t.viewContentSpan)}>Клиент:</span><font className={css(t.viewContentFont)}>{this.props.Store.detail.name}</font><font className={css(t.viewContentFont)}>{this.props.Store.detail.phone}</font></p>
                                    <p className={css(t.viewContentText)}><span className={css(t.viewContentSpan)}>Мастер:</span>{this.props.Store.detail.master}</p>
                                </div>
                                <div className={css(g.flex, t.viewBottom)}>
                                    <div className={css(g.flex, t.viewButton, t.viewButton1)}>Перенести</div>
                                    <div className={css(g.flex, t.viewButton, t.viewButton2)}>Готово</div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (<div></div>)}
            </div>
        </div>
        )
    }
}
export default connect(
  state => ({
    Store: state
  }),
  dispatch =>({
      toggleView: () => {dispatch({type:'TOGGLE_DETAIL'})},
      chairPush: (item) => {dispatch({type:'PUSH_CHAIR', payload:item})}
  })
)(ChairHOC(Home))