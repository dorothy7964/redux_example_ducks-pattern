import React, { Component } from 'react';
import './App.css';

import PaletteContainer from './containers/PaletteContainer';
import Counter from './components/Counter';
import WaitingList from './components/WaitingList';

class App extends Component {
  render() {
    return(
      <div className="App">
        <PaletteContainer />
        <Counter />
        <WaitingList />
      </div>
    );
  }
}

export default App;
