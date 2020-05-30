import React, { Component } from 'react'

export default class SetStatePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }
    }
    
    componentDidMount() {
        document.getElementById("button").addEventListener('click', this.setCounter)
    }

    changeValue = (v) => {
        this.setState({
            counter: this.state.counter + v
        })
        console.log(this.state.counter);
        
    }

    setCounter = (v) => {
        // setState包裹在settimeout里面 是同步更新的
        // setTimeout(() => {
        //     this.changeValue(1)
        // })
        this.changeValue(2)
    }
    render() {
        return (
            <div>
                <p>{this.state.counter}</p>
                <button onClick={this.setCounter}>change</button>
                <button id="button">change</button>
            </div>
        )
    }
}
