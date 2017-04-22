import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterAshanas } from '../../actions/ashanas';
import './AshanaSearch.scss';

class AshanaSearch extends Component {
  render() {
    return (
      <input
        className="input-search-ashanas"
        type="search"
        placeholder="Search..."
        onFocus={e => e.target.placeholder=''}
        onBlur={e => e.target.placeholder='Search...'}
        onChange={e => this.props.filterAshanas(e.target.value)}
      />
    )
  }
}

const mapDispatchToState = {
  filterAshanas,
}

export default connect(null, mapDispatchToState)(AshanaSearch);
