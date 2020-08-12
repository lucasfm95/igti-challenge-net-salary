import React, { Component } from 'react';
import InputSalary from '../InputSalary/InputSalary';
import ProcessedData from "../ProcessedData/ProcessedData";
import StatusBar from "../StatusBar/StatusBar";
import css from './net-salary.module.css';

export default class NetSalary extends Component {


    constructor() {
        super();
        var valueInput = 1000;

        this.state = {
            baseINSS: valueInput
        };
    }

    handleOnChangeInput = (value) => {
        this.valueInput = value;

        this.setState({ baseINSS: value });
    }

    render() {
        const { baseINSS } = this.state;
        return (
            <div>
                <h1 className={css.textAlign}>Net Salary in React</h1>
                <InputSalary label="Salary" step="100" value="1000" onChange={this.handleOnChangeInput} />
                <ProcessedData baseINSS={baseINSS} />
                <StatusBar />
            </div>
        )
    }
}
