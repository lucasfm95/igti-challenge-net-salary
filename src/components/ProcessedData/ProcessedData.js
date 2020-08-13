import React, { Component } from 'react';
import css from './processed-date.module.css';
import InputReadOnly from '../InputReadOnly/InputReadOnly';

export default class ProcessedData extends Component {
    render() {
        const { baseINSS, discountINSS, percentageDiscountINSS, baseIR, discountIR, percentageDiscountIR, netSalary, percentageNetSalary } = this.props;
        return (
            <div className={css.container}>
                <InputReadOnly label="Base INSS:" value={`R$ ${baseINSS}`} />
                <InputReadOnly label="Discount INSS:" value={`R$ ${discountINSS} (${percentageDiscountINSS}%)`} color={"#e67e22"} />
                <InputReadOnly label="Base IR:" value={`R$ ${baseIR}`} />
                <InputReadOnly label="Discount IR:" value={`R$ ${discountIR} (${percentageDiscountIR}%)`} color={"#c0392b"} />
                <InputReadOnly label="Net Salary:" value={`R$ ${netSalary} (${percentageNetSalary}%)`} color={"#16a085"} />
            </div>
        )
    }
}
