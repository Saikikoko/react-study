import React, { Component } from 'react';
import { ThemeContext } from '../context';

class HomePage extends Component {
    static contextType = ThemeContext;
    
    render() {
        const {themeColor} = this.context
        console.log(this)
        return (
            <div>
                <div className={themeColor}>{themeColor}</div>
            </div>
        );
    }
}

export default HomePage;