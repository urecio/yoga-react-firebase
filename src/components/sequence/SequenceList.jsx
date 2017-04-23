import React, { Component } from 'react';
import { connect } from 'react-redux';
import AshanaList from '../ashanas/AshanaList';
import { getSequences } from '../../actions/sequence';

class SequenceList extends Component {
  componentWillMount() {
    this.props.getSequences();
  }
  render() {
    return (
      <div className="sequence-list-container">
        <ul>
          {
            this.props.sequences.map((sequence, index) => (
              <li key={`${sequence.name} ${sequence.index}`} className="list-group-item">
                <p className="sequence-name">{sequence.name}</p>
                <AshanaList
                  inline
                  showDescription={false}
                  ashanas={sequence.sequence}
                />
              </li>
            ))
          }
          {
            this.props.sequences.length === 0 &&
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
