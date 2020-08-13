import React, { Component } from 'react';
import css from './input-read-only.module.css';

export default class InputReadOnly extends Component {
    render() {
        const { label, value, color } = this.props;
        return (
            <div className={css.container}>
                <span>{label}</span>
                <input className={css.input} type="text" readOnly={true} value={value} style={{ color: color }} />
            </div>
        )
    }
}
