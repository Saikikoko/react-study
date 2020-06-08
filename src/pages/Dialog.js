import React, { Component } from 'react'
import { createPortal } from 'react-dom'

export default class Dialog extends Component {
    render() {
        return createPortal((
            <div className="border">
                Dialog
            </div>
        ), document.body)
    }
}

// const arr = [1,2,3,3,4]

// arr.reduce((prev,current) => {
//     return prev + current
// })

function f1(args) {
    console.log(args + 'f1');
    return args  
}

function f2(args) {
    console.log(args + 'f2');
    return args  
}

function f3(args) {
    console.log(args + 'f3');
    return args  
}
const f4 = next => action => {
    console.log('enter f4');
    return next(action)
}
const f5 = next => action => {
    console.log('enter f5');
    return next(action)
}
function compose(...funs) {
    // console.log(funs);
    if(funs.length === 0) {
        return args => args
    }

    if(funs.length === 1) {
        return funs[0];
    }
    
    return funs.reduce((a,b) => (...args) => a(b(...args)))
}
f4(f5(() => {}))
console.log(compose(f1, f2, f3));

compose(f1, f2, f3)('sb')