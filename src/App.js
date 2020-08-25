import React from 'react';
import logo from './logo.svg';
import { BurgerBuilder } from './features/burger/BurgerBuilder';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BurgerBuilder />
      </header>
    </div>
  );
}

export default App;
