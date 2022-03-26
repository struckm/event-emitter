import React from 'react';
import logo from './logo.svg';
import './App.css';
import LinkComponent from './LinkComponent';
import LabelComponent from './LabelComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <LinkComponent />
        <LabelComponent />
      </header>
    </div>
  );
}

export default App;
