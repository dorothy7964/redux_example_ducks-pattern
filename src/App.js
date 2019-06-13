import React, { Component } from 'react';
import './App.css';

import Palette from './components/Palette';
import Counter from './components/Counter';

class App extends Component {
  render() {
    return(
      <div className="App">
        <Palette />
        <Counter />
      </div>
    );
  }
}

export default App;
