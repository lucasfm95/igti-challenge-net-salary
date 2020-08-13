import React, { Component } from 'react';
import css from './processed-date.module.css';

export default class ProcessedData extends Component {
    render() {
        const { baseINSS, discountINSS, baseIR, discountIR, netSalary } = this.props;
        return (
            <div className={css.container}>
                <div className={css.itemContainer}><span>Base INSS: {baseINSS}</span></div>
                <div className={css.itemContainer}><span>Discount INSS: {discountINSS}</span></div>
                <div className={css.itemContainer}><span>Base IR: {baseIR}</span></div>
                <div className={css.itemContainer}><span>Discount IR: {discountIR}</span></div>
                <div className={css.itemContainer}><span>Net Salary: {netSalary}</span></div>
            </div>
        )
    }
}
