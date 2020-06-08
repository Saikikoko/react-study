import React, { Component } from 'react'
import Dialog from './Dialog'

export default class Modal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showDialog: false
        }
    }
    render() {
        const {showDialog} = this.state
        return (
            <div className="border">
                <div>showDialog{showDialog}</div>
                <button onClick={() => {
                    this.setState({
                        showDialog: !showDialog
                    })
                }}>click</button>
                {showDialog && <Dialog/>}
            </div>
        )
    }
}
