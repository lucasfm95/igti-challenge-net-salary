import React, { Component } from 'react';
import InputSalary from '../InputSalary/InputSalary';
import ProcessedData from "../ProcessedData/ProcessedData";
import StatusBar from "../StatusBar/StatusBar";
import css from './net-salary.module.css';
import { calculateSalaryFrom } from '../../helpers/salary';

export default class NetSalary extends Component {

    constructor() {
        super();

        var valueInput = 1000;
        let result = calculateSalaryFrom(valueInput);

        this.state = {
            baseINSS: result.baseINSS,
            discountINSS: result.baseINSS,
            baseIR: result.baseIRPF,
            discountIR: result.discountIRPF,
            netSalary: result.netSalary
        };
    }

    handleOnChangeInput = (value) => {
        let result = calculateSalaryFrom(value);

        this.setState({
            baseINSS: result.baseINSS,
            discountINSS: result.baseINSS,
            baseIR: result.baseIRPF,
            discountIR: result.discountIRPF,
            netSalary: result.netSalary
        });
    }

    render() {
        const { baseINSS, discountINSS, baseIR, discountIR, netSalary } = this.state;
        return (
            <div>
                <h1 className={css.textAlign}>Net Salary</h1>
                <InputSalary label="Salary" step="100" value="1000" onChange={this.handleOnChangeInput} />
                <ProcessedData baseINSS={baseINSS} discountINSS={discountINSS} baseIR={baseIR} discountIR={discountIR} netSalary={netSalary} />
                <StatusBar />
            </div>
        )
    }
}
