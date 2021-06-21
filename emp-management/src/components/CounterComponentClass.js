import React from "react";

export class CounterComponentClass extends React.Component {

    constructor() {
        super();
        this.state = {
            counter: 0,
            name: "Mayank",
            currentTime: `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`
        }
    };

    componentDidMount() {
        setInterval(() => {
            this.setState({
                counter: this.state.counter + 1,
                name: this.state.name,
                currentTime: `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`
            })
        }, 1000)
    }

    incrementTimer = () => {
        this.setState({
            counter: this.state.counter + 1,
            name: this.state.name
        })
    }

    updateName = () => {
        this.setState({
            counter: this.state.counter,
            name: "TehnoFunnel"
        })
    }
    
    render() {
        return (
            <div>
                <h1>Current Time is {this.state.currentTime}</h1>
                <h1>Current Time is {this.state.counter}</h1>
                <h2>User Name: {this.state.name}</h2>
                <input type="button" onClick={this.incrementTimer} value="Incremnt"/>
                <input type="button" onClick={this.updateName} value="Update Name"/>
            </div>
        )
    }
    
}