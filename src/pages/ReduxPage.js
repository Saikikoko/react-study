import React, { Component } from 'react'
import store from '../store/'

export default class ReduxPage extends Component {
    componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
            this.forceUpdate()
        })
    }
    componentWillUnmount() {
        if(this.unsubscribe) {
            this.unsubscribe()
        }
    }
    add = () => {
        store.dispatch({type: 'ADD', payload: 100})
    }
    
    asyncAdd = () => {
        // store.dispatch(() => {
        //     setTimeout(() => {
        //         store.dispatch({type: 'ADD', payload: 50})
        //     })
        // })
        store.dispatch((dispatch, getState) => {
            setTimeout(() => {
              dispatch({type: "ADD", payload: 50});
            }, 1000);
          });
    }
    render() {
        return (
            <div>
                <h3>ReduxPage</h3>
                <div>{store.getState().user}</div>
                <button onClick={this.add}>add</button>
                <button onClick={this.asyncAdd}>asyncAdd</button>
            </div>
        )
    }
}

