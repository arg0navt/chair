import React, { Component } from 'react';
import { IndexRoute, IndexRedirect, Router, Route, browserHistory } from 'react-router';
import AppWrap from './ui/AppWrap'
import Home from './page/home'

export const router = (
    <Route path="/" component={AppWrap}>
        <IndexRoute component={Home} />
    </Route>
)