import React, { Component } from 'react';
import { connect } from 'react-redux';
import AshanaList from '../ashanas/AshanaList';
import './Sequence.scss';

class Sequence extends Component {
  render() {
    return (
      <div className="sequence-container">
        <AshanaList
          ashanas={this.props.sequence}
          inline/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  sequence: state.sequence.sequenceBuilding,
});

export default connect(mapStateToProps)(Sequence);
