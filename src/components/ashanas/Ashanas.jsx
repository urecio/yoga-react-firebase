import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import AshanaList from './AshanaList';
import AshanaSearch from '../ashanaSearch/AshanaSearch';
import { addAshanaToSequence } from '../../actions/sequence';
import './Ashanas.scss';

class Ashana extends Component {
  static propTypes = {
    filteredAshanas: PropTypes.object,
  }
  render() {
    return (
      <div className="ashanas-container">
        <AshanaSearch />
        <AshanaList
          ashanas={this.props.filteredAshanas}
          onAddAshana={this.props.addAshanaToSequence}
          showDescription={true}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    filteredAshanas: state.ashana.filteredAshanas,
  };
}

const mapDispatchToState = {
  addAshanaToSequence,
};

export default connect(null, mapDispatchToState)(Ashana);
