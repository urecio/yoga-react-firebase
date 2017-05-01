import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAshanas } from '../actions/ashanas';

class App extends Component {
  componentWillMount() {
    this.props.getAshanas();
  }
  render() {
    return (
      <div>
        { this.props.children }
      </div>
    );
  }
}

const mapDispatchToState = {
  getAshanas,
}

export default connect(null, mapDispatchToState)(App);
