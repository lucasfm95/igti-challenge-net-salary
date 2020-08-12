import React, { Component } from 'react'

export default class ProcessedData extends Component {
    render() {
        const { baseINSS } = this.props;
        return (
            <div>
                <div><span>Base INSS: {baseINSS}</span></div>
                <div><span>Discount INSS:</span></div>
                <div><span>Base IR:</span></div>
                <div><span>Discount IR:</span></div>
                <div><span>Net Salary:</span></div>
            </div>
        )
    }
}
