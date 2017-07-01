import React, { Component } from 'react';
import { IndexRoute, IndexRedirect, Router, Route, browserHistory } from 'react-router';
import AppWrap from './ui/AppWrap'
import Home from './page/home'
import Login from './page/login'
import Records from './page/records'
import RecordsCurrent from './page/records/current'
import RecordsHistory from './page/records/history'
import Control from './page/control'
import ControlHairdresser from './page/control/hairdresser'
import ControlArmchairs from './page/control/armchairs'
import AddHairdresser from './page/control/add'
import { setting } from './config'

export const router = (
    <Route path={`${setting.site}`} component={AppWrap}>
        <IndexRoute component={Login} />
        <Route path={`${setting.site}entry`} component={Home}></Route>
        <Route path={`${setting.site}records`} component={Records}>
            <IndexRoute component={RecordsCurrent} />
            <Route path={`${setting.site}records/current`} component={RecordsCurrent}></Route>
            <Route path={`${setting.site}records/history`} component={RecordsHistory}></Route>
        </Route>
        <Route path={`${setting.site}control`} component={Control} title={'Мои записи'}>
            <IndexRoute component={ControlHairdresser} />
            <Route path={`${setting.site}control/hairdresser`} component={ControlHairdresser}></Route>
            <Route path={`${setting.site}control/hairdresser/add`} component={AddHairdresser}></Route>
            <Route path={`${setting.site}control/armchairs`} component={ControlArmchairs}></Route>
        </Route>
    </Route>
)