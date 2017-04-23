import React, { Component } from 'react';
import { connect } from 'react-redux';
import AshanaList from '../ashanas/AshanaList';
import InputPlain from '../common/InputPlain';
import ButtonSave from '../common/ButtonSave';
import { saveSequence } from '../../actions/sequence';
import './Sequence.scss';

class Sequence extends Component {
  // TODO: add author and check if you are the author
  // if you are, save the sequence
  // if not, and the sequence is different, create a new sequence
  constructor(...args) {
    super(...args);
    this.state = {
      errorMessage: '',
    };
  }
  handleSaveSequence() {
    if (!this.state.name) {
      this.setState({ errorMessage: 'Enter a name' })
      return;
    }
    if (!this.props.sequence || this.props.sequence.length === 0) {
      this.setState({ errorMessage: 'Add at least one ashana' });
      return;
    }
    this.setState({ errorMessage: '' });
    this.props.saveSequence(this.state.name, this.props.sequence);
  }
  render() {
    return (
      <div className="sequence-container row">
        <div className="col-xs-12">
          <div className="row">
            <InputPlain
              type="text"
              placeholder="Sequence name"
              onChange={e => this.setState({ name: e.target.value })}
            />
            <ButtonSave
              onClick={() => this.handleSaveSequence(this.state.name, this.props.sequence)}
            />
          {
            this.state.errorMessage &&
            <div className="alert alert-danger">
              {this.state.errorMessage}
            </div>
          }
          </div>
          <div className="row ashanas-list-container">
            <AshanaList
              ashanas={this.props.sequence}
              inline/>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  sequence: state.sequence.sequenceBuilding,
});

const mapDispatchToState = {
  saveSequence
};

export default connect(mapStateToProps, mapDispatchToState)(Sequence);
