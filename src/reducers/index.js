import React, { Component } from 'react';
import { createStore, combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import nav from './nav'
import login from './login'
import detail from './detail'
import viewDetail from './viewDetail'

export default combineReducers({
    routing: routerReducer,
    nav,
    login,
    detail,
    viewDetail
})