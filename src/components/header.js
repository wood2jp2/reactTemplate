import React from 'react';
import Logo from './Logo'

const Header = () => {
  return (
    <div>
    <header className="App-header">
      <h1 className="App-title">Welcome to React</h1>
      <Logo />
    </header>
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
    </div>
  )
};

export default Header;
