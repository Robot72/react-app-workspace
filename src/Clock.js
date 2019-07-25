import React from 'react';

class Clock extends React.Component
{
    constructor (props) {
        super(props);
        this.startIndex = parseInt(props.startIndex);

        console.log(this.startIndex);
        console.log(typeof this.startIndex)
        if (!this.startIndex) {
            this.startIndex = 1;
        }

        this.state = {
            datetime: new Date(),
            index: this.startIndex
        }
    }

    componentDidMount() {
        this.timerId = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    tick() {
        this.setState((state, props) => ({
            index: state.index + 1
        }));
    }

    render () {
        return (<table>
            <tr>
                <td>Clock</td>
                <td>Index/Count</td>
            </tr>
            <tr>
                <td>{this.state.datetime.toLocaleDateString()}</td>
                <td>{this.state.index}</td>
            </tr>
        </table>)
    }
}

export default Clock;
