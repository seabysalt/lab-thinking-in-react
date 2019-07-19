import React, { Component } from 'react';
import './App.css';
import FilterableProductTable from './container/FilterableProductTable'
import data from './data.json'

class App extends Component {
  render() {
    return (
      <div className="App">
        <FilterableProductTable products={ data } />
      </div>
    );
  }
}

export default App;
