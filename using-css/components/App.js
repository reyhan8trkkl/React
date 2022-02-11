import React from 'react';
import './component.css';
import './App.css';

const App = () => {
  return (
    <div className="parent">

    <h1 className="title">
      Hello World
    </h1>
    <h2 className="child" id="children">
      How Are You?
      </h2>
      <p id="parap">im fine!</p>
    </div>
  );
};

export default App;