import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { css } from 'aphrodite/no-important';
import axios  from 'axios';
import cookie from 'react-cookies'
import { Api } from '../config'

const ChairHOC = (ComposedComponent) => {
    class ChairHOC extends Component{
        chairGet(date){
            axios.get(Api('Pwa', 'getTimeLine',`"date":"${date}"`))
            .then((response) => {
                if (response.data[0].result != undefined && response.data[0].result != null){ 
                    this.chairPush(response.data[0].result[`${date}`])
                }
            })
            .catch((error) => {console.log(error)})
        }
        render() {
            return <ComposedComponent chairGet={this.chairGet} {...this.props} {...this.state} />;
        }
    }
    return ChairHOC
}
export default ChairHOC;