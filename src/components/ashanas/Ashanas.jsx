import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import AshanaList from './AshanaList';
import AshanaSearch from '../ashanaSearch/AshanaSearch';
import { getAshanas } from '../../actions/ashanas';
import { addAshanaToSequence } from '../../actions/sequence';
import './Ashanas.scss';

class Ashana extends Component {
  static propTypes = {
    getAshanas: PropTypes.func.isRequired,
    ashanas: PropTypes.arrayOf(PropTypes.object).isRequired,
  }
  componentWillMount() {
    this.props.getAshanas();
  }
  render() {
    return (
      <div className="ashanas-container">
        <AshanaSearch />
        <AshanaList
          ashanas={this.props.ashanas}
          onAddAshana={this.props.addAshanaToSequence}
          showDescription={true}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ashanas: state.ashana.ashanas,
  };
}

const mapDispatchToState = {
  getAshanas,
  addAshanaToSequence,
};

export default connect(mapStateToProps, mapDispatchToState)(Ashana);
