import React, { Component } from 'react';
import { createStore, combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import nav from './nav'
import user from './user'
import chair from './chair'
import detail from './detail'
import viewDetail from './viewDetail'

export default combineReducers({
    routing: routerReducer,
    nav,
    user,
    chair,
    detail,
    viewDetail
})