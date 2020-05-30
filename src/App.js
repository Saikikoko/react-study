import React from 'react';
import './App.css';
import ClassComponents from './pages/ClassComponents';
import FunctionComponents from './pages/FunctionComponents';
import SetStatePage from './pages/SetStatePage';
// import SetStatePage from './pages/SetStatePage';

function App() {
  return (
    <div className="App">
      <ClassComponents/>
      <FunctionComponents/>
      {/* <SetStatePage/> */}
      <SetStatePage/>
    </div>
  );
}

export default App;
