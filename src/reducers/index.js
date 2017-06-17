import React, { Component } from 'react';
import { createStore, combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import nav from './nav'
import login from './login'

export default combineReducers({
    routing: routerReducer,
    nav,
    login
})