import React, { Component } from 'react';
import './App.css';
import Ashanas from '../ashanas/Ashanas';
import Sequence from '../sequence/Sequence';

export default class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <div className="row">
          <div className="col-md-4">
            <Ashanas />
          </div>
          <div className="col-md-7">
            <Sequence />
          </div>
        </div>
      </div>
    );
  }
}
