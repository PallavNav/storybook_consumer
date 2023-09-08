import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'storybook_producer_app';

function App() {
  const handleButtonClick = () => {
    alert("Button getting used from the producer app! Hurray!");
  };
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Consumer App
        </p>
        <Button label='Hello Nav! I am the first Producer App!' onClick={handleButtonClick}></Button>
      </header>
    </div>
  );
}

export default App;
