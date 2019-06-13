import React, { Component } from 'react';
import './App.css';

import Palette from './components/Palette';

class App extends Component {
  render() {
    return(
      <div className="App">
        <Palette />
      </div>
    );
  }
}

export default App;
