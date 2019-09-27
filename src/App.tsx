import * as React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from "./component/testStateless/Header";
import Description from "./component/testStateComponent/Description";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header name="PicaPica" />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Description countBy={3} />
    </div>
  );
};

export default App;
