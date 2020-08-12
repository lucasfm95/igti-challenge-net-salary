import React, { Component } from 'react'

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
            <>
                <span>{label}</span>
                <input type="number" step={step} value={value} onChange={this.handleInputChange} />
            </>
        )
    }
}
