import React, { Component } from 'react';
import { css } from 'aphrodite/no-important';
import { setting } from '../../config'
import t from '../../style/table'

export const FilterTable = () => (
    <div className={css(t.filter)}>
        <div className={css(t.filterItem)}>
            <p className={css(t.filtertext, t.textActive)}>Стрижка<span className={css(t.filterspan, t.textActive)}>Короткие волосы</span></p>
            <div className={css(t.filterBorder, t.borderActive)}></div>
        </div>
        <div className={css(t.filterItem)}>
            <p className={css(t.filtertext)}>Стрижка<span className={css(t.filterspan)}>Средние волосы</span></p>
            <div className={css(t.filterBorder)}></div>
        </div>
        <div className={css(t.filterItem)}>
            <p className={css(t.filtertext)}>Стрижка<span className={css(t.filterspan)}>Длинные волосы</span></p>
            <div className={css(t.filterBorder)}></div>
        </div>
        <div className={css(t.filterItem)}>
            <p className={css(t.filtertext, t.soloText)}>Маникюр</p>
            <div className={css(t.filterBorder)}></div>
        </div>
    </div>
)