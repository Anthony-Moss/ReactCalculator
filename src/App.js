import React from 'react';
import logo from './logo.svg';
import './App.css';
import CalculatorBase from './components/CalculatorBase';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React Clock
        </p>
        <CalculatorBase />
      </header>
    </div>
  );
}

export default App;
