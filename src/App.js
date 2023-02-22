import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
import MetamaskLogin from './login.js';
import VerifyButton from './verify.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MetamaskLogin className="metamaskLogin"></MetamaskLogin>
        <img src={logo} className="move" alt="logo" />
        <img className="App-logo" src={process.env.REACT_APP_IMAGE}></img>
        <h1>Quest Steps</h1>
        <span className="buttonClass">
          <Button id="buy" variant="outline-primary" target="_blank" href='https://app.uniswap.org/#/swap'> Buy </Button>
          <VerifyButton/>
        </span>
      </header>
    </div>
  );
}

export default App;
