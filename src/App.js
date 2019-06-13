import React, { Component } from 'react';
import './App.css';

import Palette from './components/Palette';
import Counter from './components/Counter';
import WaitingList from './components/WaitingList';

class App extends Component {
  render() {
    return(
      <div className="App">
        <Palette />
        <Counter />
        <WaitingList />
      </div>
    );
  }
}

export default App;
