import React from 'react';
import logo from './logo.svg';
import './App.css';
import ClassComponents from './page/ClassComponents';
import HocPage from './page/HocPage';

function App() {
  return (
    <div className="App">
      {/* <ClassComponents/> */}
      <HocPage/>
    </div>
  );
}

export default App;
