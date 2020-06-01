import React, { Component } from 'react';

const foo = Cmp => props => {
    return(
        <div className="border">
            <Cmp {...props}/>
        </div>
    )
}

function Child(props) {
    return (
        <div className="border">
            Child-{props.name}
        </div>
    )
}
const Foo = foo(foo(Child))
console.log(Foo)
class HocPage extends Component {
    render() {
        return (
            <div>
                <h3>HocPage</h3>
                <Foo name="参数"/>
            </div>
        );
    }
}

export default HocPage;