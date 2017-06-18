import React, { Component } from 'react';
import { createStore, combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import nav from './nav'
import user from './user'
import detail from './detail'
import viewDetail from './viewDetail'

export default combineReducers({
    routing: routerReducer,
    nav,
    user,
    detail,
    viewDetail
})