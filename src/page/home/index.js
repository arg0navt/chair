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

const timePx = ['09:00','09:30','10:00','10:30','11:00','11:30','12:00','12:30','13:00','13:30','14:00','14:30','15:00','15:30','16:00','16:30','17:00','17:30','18:00','18:30','19:00','19:30','20:00','20:30',]

const Info = ({timeStart, timeEnd, status}) => {
    const start = _.indexOf(timePx, timeStart) * 75 + 1
    const end = _.indexOf(timePx, timeEnd) * 75 - 5
    let height = end - start
    let background = '#8eae55'
    if (status == 'absent'){
        background = '#323136'
    } else if (status == 'busy'){
        background = '#fac054'
    } else if (status == 'free'){
        background = '#8eae55'
        height = 70
    }
    return (
        <div style={{top:start,height:height,background:background}} className={css(t.info)}>
            <p className={css(t.infoName)}>{timeStart}</p>
        </div>
    )
}

const absent = [{start:'10:00',end:'11:00'},{start:'14:00',end:'14:30'}]
const busy = [{start:'12:00',end:'13:00'},{start:'16:00',end:'16:30'}]

const absent2 = [{start:'11:00',end:'12:00'},{start:'15:00',end:'15:30'}]
const busy2 = [{start:'09:00',end:'10:00'},{start:'19:00',end:'16:30'}]

const absent3 = [{start:'09:00',end:'09:30'},{start:'16:00',end:'16:30'}]
const busy3 = [{start:'10:00',end:'11:00'},{start:'12:00',end:'13:30'}]

const absent4 = [{start:'13:00',end:'14:00'},{start:'14:00',end:'14:30'}]
const busy4 = [{start:'10:00',end:'11:00'},{start:'11:00',end:'11:30'}]

const absent5 = [{start:'09:00',end:'09:30'},{start:'12:00',end:'13:00'}]
const busy5 = [{start:'10:00',end:'10:30'},{start:'14:00',end:'15:00'}]

const Column = ({absent, busy}) => {
    let free = timePx
    absent.map((i, n)=>{
        free = _.filter(free, function(item, index){
            let startIndex = _.indexOf(free, i.start)
            let endIndex = _.indexOf(free, i.end)
            if (!(index >= startIndex && index < endIndex)){
                return item
            }
        })
    })
    busy.map((i, n)=>{
        free = _.filter(free, function(item, index){
            let startIndex = _.indexOf(free, i.start)
            let endIndex = _.indexOf(free, i.end)
            if (!(index >= startIndex && index < endIndex)){
                return item
            }
        })
    })
    return (
        <div className={css(t.itemsColumn)}>
            {absent.map((item, index) => <Info key={index} timeStart={item.start} timeEnd={item.end} status={'absent'} />)}
            {busy.map((item, index) => <Info key={index} timeStart={item.start} timeEnd={item.end} status={'busy'} />)}
            {free.map((item, index)=> <Info key={index} timeStart={item} timeEnd={''} status={'free'} />)}
        </div>
    )
}

class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            time: moment('2016-12-31 11:32').format('LT'),
            past: 0,
            popup:false
        }
    }
    componentDidMount(){
        const h = this.state.time.substring(0,2)
        let m = this.state.time.substring(3,5)
        let positionH = (h - 9)*150
        let procentM = (m/.6)
        let positionM = 1.5 * procentM
        let position = positionH+positionM
        this.setState({past:position})
    }
    render(){
        return(
            <div>
            <Days />
            <div className={css(t.table)}>
                <div className={css(g.flex, t.numbers)}>
                    <div className={css(t.num)}><p className={css(t.numtext)}>№1</p></div>
                    <div className={css(t.num)}><p className={css(t.numtext)}>№2</p></div>
                    <div className={css(t.num)}><p className={css(t.numtext)}>№3</p></div>
                    <div className={css(t.num)}><p className={css(t.numtext)}>№4</p></div>
                    <div className={css(t.num)}><p className={css(t.numtext)}>№5</p></div>
                    <div className={css(t.num)}><p className={css(t.numtext)}>№6</p></div>
                    <div className={css(t.num)}><p className={css(t.numtext)}>№7</p></div>
                </div>
                <div className={css(g.flex, t.tableWrap)} id="tableWrap">
                    <div className={css(t.columTime)}>
                        {timePx.map((item, index)=> {
                            const h = item.slice(0,2)
                            const m = item.slice(3,5)
                            return <div key={index} className={css(t.itemTime)}><p className={css(t.timeText)}><span className={css(t.timeSpan1)}>{h}</span><span className={css(t.timeSpan)}>{m}</span></p></div>
                        })}
                    </div>
                    <div className={css(t.itemWrap)}>
                        <div className={css(t.linWrap)}>
                            {timePx.map((item, index) => <div key={index} className={css(t.lin)}></div>)}
                            <div className={css(g.flex, t.items)}>
                                <Column absent={absent} busy={busy} />
                                <Column absent={absent2} busy={busy2} />
                                <Column absent={absent3} busy={busy3} />
                                <Column absent={absent4} busy={busy4} />
                                <Column absent={absent5} busy={busy5} />
                                <Column absent={absent5} busy={busy5} />
                                <Column absent={absent5} busy={busy5} />
                            </div>
                            <div className={css(t.past)} style={{height:`${this.state.past}px`}}>
                                <div className={css(t.pastLin)}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <FilterTable />
                {this.state.popup != false ? (
                    <div>
                        <div className={css(t.quickViewShadow)}></div>
                <div className={css(g.flex, t.quickViewWrap)}>
                    <div className={css(t.quickView)}>
                        <div className={css(t.topView)}>
                            <p className={css(t.topViewText)}>09:15-10:45</p>
                            <div className={css(g.flex, t.nuber)}><p  className={css(t.nuberText)}>Кресло<span className={css(t.nuberSpan)}>4</span></p></div>
                        </div>
                        <div className={css(t.viewContent)}>
                            <p className={css(t.viewContentText)}><span className={css(t.viewContentSpan)}>Тип стрижки:</span>Стрижка коротких волос</p>
                            <p className={css(t.viewContentText)}><span className={css(t.viewContentSpan)}>Клиент:</span><font className={css(t.viewContentFont)}>Елена Иванова</font><font className={css(t.viewContentFont)}>8 (900) 123-45-67</font></p>
                            <p className={css(t.viewContentText)}><span className={css(t.viewContentSpan)}>Мастер:</span>Евгения Петрова</p>
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
  dispatch =>({})
)(Home)