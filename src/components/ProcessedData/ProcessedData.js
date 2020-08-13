import React, { Component } from 'react';
import css from './processed-date.module.css';

export default class ProcessedData extends Component {
    render() {
        const { baseINSS, discountINSS, percentageDiscountINSS, baseIR, discountIR, percentageDiscountIR, netSalary, percentageNetSalary } = this.props;
        return (
            <div className={css.container}>
                <div className={css.itemContainer}><span>Base INSS: R$ {baseINSS}</span></div>
                <div className={css.itemContainer}><span>Discount INSS: R$ {discountINSS} ({percentageDiscountINSS}%)</span></div>
                <div className={css.itemContainer}><span>Base IR: R$ {baseIR}</span></div>
                <div className={css.itemContainer}><span>Discount IR: R$ {discountIR} ({percentageDiscountIR}%)</span></div>
                <div className={css.itemContainer}><span>Net Salary: R$ {netSalary} ({percentageNetSalary}%)</span></div>
            </div>
        )
    }
}
