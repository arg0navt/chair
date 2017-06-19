import React, { Component } from 'react';

const setting = {
    server:'http://barbers.card.kaerus.ru',
    platform:'6'
}

export const Api = (controll, method, options = '', token = '') => {
    return `${setting.server}/${controll}/${method}.json?commands=[{%22data%22:{${options == '' ? '' : options + ','}${token == '' ? '' : '"token":"' + token + '",'}%22platform%22:%22${setting.platform}%22}}]`
}