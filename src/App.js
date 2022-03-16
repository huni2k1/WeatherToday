import React, { useEffect,useState} from 'react';
import logo from './logo.svg';
import './App.css';
import MainColumn from './components/mainColumn';
import DisplayBoard from './components/DisplayBoard';
function App() {

  return (
    <div className="App">
      <DisplayBoard></DisplayBoard>
      <MainColumn></MainColumn>
    </div>
  );
}

export default App;
