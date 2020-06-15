import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={require('./img/logo.png')} className="App-logo" alt="logo" />
        <p id={"welcome"}>欢迎来到双蛋黄工厂</p>
        <p style={{marginTop:2,fontSize:15}}>点击进入</p>
      </header>
    </div>
  );
}

export default App;
