import React, { Component } from 'react';

const setting = {
    server:'http://barbers.card.kaerus.ru',
    platform:'6'
}

export const settingsTime = {
    timePx: ['09:00','09:30','10:00','10:30','11:00','11:30','12:00','12:30','13:00','13:30','14:00','14:30','15:00','15:30','16:00','16:30','17:00','17:30','18:00','18:30','19:00','19:30','20:00','20:30','21:00','21:30','22:00','22:30','23:00'],
    'YYYY-MM-DD': {
        sameDay: 'YYYY-MM-DD',
        nextDay: 'YYYY-MM-DD',
        nextWeek: 'YYYY-MM-DD',
        lastDay: 'YYYY-MM-DD',
        lastWeek: 'YYYY-MM-DD',
        sameElse: 'YYYY-MM-DD'
    },
    'MMM DD dd': {
        sameDay: 'MMM DD dd',
        nextDay: 'MMM DD dd',
        nextWeek: 'MMM DD dd',
        lastDay: 'MMM DD dd',
        lastWeek: 'MMM DD dd',
        sameElse: 'MMM DD dd'
    }           
}

export const Api = (controll, method, options = '', token = '') => {
    return `${setting.server}/${controll}/${method}.json?commands=[{%22data%22:{${options == '' ? '' : options + ','}${token == '' ? '' : '"token":"' + token + '",'}%22platform%22:%22${setting.platform}%22}}]`
}