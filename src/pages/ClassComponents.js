import React, { Component } from 'react'

export default class ClassComponents extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: new Date()
        }
    }
    
    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({
                data: new Date()
            })
        }, 1000)
    }
    render() {
        const { data } = this.state
        return (
            <div>
                <h3>ClassComponents</h3>
                <span>{data.toLocaleTimeString()}</span>
            </div>
        )
    }
}

