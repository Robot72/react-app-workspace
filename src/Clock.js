import React from 'react';

class Clock extends React.Component
{
    constructor (props) {
        super(props);
        this.state = {
            datetime: new Date()
        }
    }

    render () {
        <table>
            <tr>
                <td>Clock</td>
            </tr>
            <tr>
                <td>{this.state.datetime.toLocateTimeString()}</td>
            </tr>
        </table>
    }
}
