import React, { Component } from 'react';
import { IndexRoute, IndexRedirect, Router, Route, browserHistory } from 'react-router';
import AppWrap from './ui/AppWrap'
import Home from './page/home'
import Records from './page/records'
import RecordsCurrent from './page/records/current'
import RecordsHistory from './page/records/history'
import Control from './page/control'
import ControlHairdresser from './page/control/hairdresser'
import ControlArmchairs from './page/control/armchairs'

export const router = (
    <Route path="/" component={AppWrap}>
        <IndexRoute component={Home} />
        <Route path="/records" component={Records}>
            <IndexRoute component={RecordsCurrent} />
            <Route path="/records/current" component={RecordsCurrent}></Route>
            <Route path="/records/history" component={RecordsHistory}></Route>
        </Route>
        <Route path="/control" component={Control}>
            <IndexRoute component={ControlHairdresser} />
            <Route path="/control/hairdresser" component={ControlHairdresser}></Route>
            <Route path="/control/armchairs" component={ControlArmchairs}></Route>
        </Route>
    </Route>
)