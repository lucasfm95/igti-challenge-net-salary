import React, { Component } from 'react';
import InputSalary from '../InputSalary/InputSalary';
import ProcessedData from "../ProcessedData/ProcessedData";
import StatusBar from "../StatusBar/StatusBar";
import css from './net-salary.module.css';
import { calculateSalaryFrom, round } from '../../helpers/salary';
import { formatNumber } from '../../helpers/format';

export default class NetSalary extends Component {

    constructor() {
        super();

        var valueInput = 1045;
        let result = this.calculateSalary(valueInput);

        this.state = {
            baseINSS: result.baseINSS,
            discountINSS: result.discountINSS,
            percentageDiscountINSS: result.percentageDiscountINSS,
            baseIR: result.baseIR,
            discountIR: result.discountIR,
            percentageDiscountIR: result.percentageDiscountIR,
            netSalary: result.netSalary,
            percentageNetSalary: result.percentageNetSalary
        };
    }

    handleOnChangeInput = (value) => {
        let result = this.calculateSalary(value);
        this.setState({
            baseINSS: result.baseINSS,
            discountINSS: result.discountINSS,
            percentageDiscountINSS: result.percentageDiscountINSS,
            baseIR: result.baseIR,
            discountIR: result.discountIR,
            percentageDiscountIR: result.percentageDiscountIR,
            netSalary: result.netSalary,
            percentageNetSalary: result.percentageNetSalary
        });
    }

    calculateSalary(salary) {
        let salaryCalculated = calculateSalaryFrom(salary);

        let percentageINSS = (salaryCalculated.discountINSS / salaryCalculated.baseINSS) * 100;

        if (isNaN(percentageINSS))
            percentageINSS = 0;

        let percentageIR = (salaryCalculated.discountIRPF / salaryCalculated.baseIRPF) * 100;

        if (isNaN(percentageIR))
            percentageIR = 0;

        let percentageNetSalary = (salaryCalculated.netSalary / salary) * 100;

        if (isNaN(percentageNetSalary))
            percentageNetSalary = 0;

        let resul = {
            baseINSS: round(salaryCalculated.baseINSS),
            discountINSS: round(salaryCalculated.discountINSS),
            percentageDiscountINSS: round(percentageINSS),
            baseIR: round(salaryCalculated.baseIRPF),
            discountIR: round(salaryCalculated.discountIRPF),
            percentageDiscountIR: round(percentageIR),
            netSalary: round(salaryCalculated.netSalary),
            percentageNetSalary: round(percentageNetSalary)
        }

        return resul;
    }

    render() {
        const { baseINSS, discountINSS, percentageDiscountINSS, baseIR, discountIR, percentageDiscountIR, netSalary, percentageNetSalary } = this.state;
        return (
            <div>
                <h1 className={css.textAlign}>Net Salary</h1>
                <InputSalary label="Salary" step="100" value="1045" onChange={this.handleOnChangeInput} />
                <ProcessedData
                    baseINSS={formatNumber(baseINSS)}
                    discountINSS={formatNumber(discountINSS)}
                    percentageDiscountINSS={formatNumber(percentageDiscountINSS)}
                    baseIR={formatNumber(baseIR)}
                    discountIR={formatNumber(discountIR)}
                    percentageDiscountIR={formatNumber(percentageDiscountIR)}
                    netSalary={formatNumber(netSalary)}
                    percentageNetSalary={formatNumber(percentageNetSalary)}
                />
                <StatusBar
                    sizeDiscontINSS={percentageDiscountINSS}
                    sizeDiscountIR={percentageDiscountIR}
                    sizeNetSalary={percentageNetSalary}
                />
            </div>
        )
    }
}
