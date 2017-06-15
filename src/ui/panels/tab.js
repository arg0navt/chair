import React, { Component } from 'react'
import { css } from 'aphrodite/no-important'
import { Link } from 'react-router';
import g from '../../style/global'
import a from '../../style/additionally'

export const Tab = ({tab}) => {
    return (
    <div className={css(g.flex, a.tab)}>
        {tab.map((item, index) => <div key={index} className={css(g.flex, a.tabItem)}><Link activeClassName='activeTabLink' className={css(a.linkTab)} to={item.a}>{item.text}</Link></div>)}
    </div>
)}

