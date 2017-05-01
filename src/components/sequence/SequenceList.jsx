import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import AshanaList from '../ashanas/AshanaList';
import { getSequences } from '../../actions/sequence';

class SequenceList extends Component {
  componentWillMount() {
    this.props.getSequences();
  }
  render() {
    const sequences = _.values(this.props.sequences);
    return (
      <div className="sequence-list-container">
        <ul>
          {
            sequences.map(sequence => (
              <li key={`${sequence.name}`} className="list-group-item">
                <p className="sequence-name">{sequence.name}</p>
                <AshanaList
                  inline
                  showDescription={false}
                  ashanas={sequence.ashanas}
                />
              </li>
            ))
          }
          {
            sequences.length === 0 &&
            <li className="list-group-item">No sequences yet!</li>
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  sequences: state.sequence.sequences,
});

const mapDispatchToState = {
  getSequences,
}

export default connect(mapStateToProps, mapDispatchToState)(SequenceList);
