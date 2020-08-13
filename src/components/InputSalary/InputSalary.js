import React, { Component } from 'react';
import css from './input-salary.module.css';

export default class InputSalary extends Component {
    constructor(props) {
        super();

        this.state = {
            value: props.value
        }
    }

    handleInputChange = ({ target }) => {
        this.setState({
            value: target.value
        });

        this.props.onChange(target.value);
    }

    render() {
        const { step, label } = this.props;
        const { value } = this.state;
        return (
            <div className={css.container}>
                <span>{label}</span>
                <input type="number" step={step} value={value} onChange={this.handleInputChange} />
            </div>
        )
    }
}
