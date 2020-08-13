import React, { Component } from 'react';
import css from './status-bar.module.css';

export default class StatusBar extends Component {
    render() {
        const { sizeDiscontINSS, sizeDiscountIR, sizeNetSalary } = this.props;

        return (
            <div className={css.container}>
                <div className={css.statusBarINSS} style={{ width: `${sizeDiscontINSS}%` }}></div>
                <div className={css.statusBarIR} style={{ width: `${sizeDiscountIR}%` }}></div>
                <div className={css.statusBarNetSalary} style={{ width: `${sizeNetSalary}%` }}></div>
            </div>
        )
    }
}
