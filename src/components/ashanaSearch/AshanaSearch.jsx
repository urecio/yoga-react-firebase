import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterAshanas } from '../../actions/ashanas';
import InputPlain from '../common/InputPlain';
import './AshanaSearch.scss';

class AshanaSearch extends Component {
  render() {
    return (
      <InputPlain
        type="search"
        placeholder="Search..."
        onChange={e => this.props.filterAshanas(e.target.value)}
      />
    )
  }
}

const mapDispatchToState = {
  filterAshanas,
}

export default connect(null, mapDispatchToState)(AshanaSearch);
