import React, { Component } from 'react';
import { IndexRoute, IndexRedirect, Router, Route, browserHistory } from 'react-router';
import AppWrap from './ui/AppWrap'
import Home from './page/home'
import Records from './page/records'

export const router = (
    <Route path="/" component={AppWrap}>
        <IndexRoute component={Home} />
        <Route path="/records" component={Records}></Route>
    </Route>
)