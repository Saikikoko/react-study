import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// 表达式用花括号包裹
const name = 'react'
const obj = {

}
// 函数
function formatName(name) {
  return name +'123'
}
let jsx = 
<div>title,{name}
  <div>
    {formatName('sb')}
  </div>
</div>
ReactDOM.render(
  jsx,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
