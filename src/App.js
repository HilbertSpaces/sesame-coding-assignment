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
        <img className="App-logo" src="https://open-sesame-crm-user-files.s3.us-west-1.amazonaws.com/cldkh0a8h00096b0scornp2ll/0edb80cc-f82c-4b8c-9ca1-ce32a1f1bd09/USDC Coin.png"></img>
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
