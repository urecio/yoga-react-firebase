import _ from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class AshanaList extends Component {
  static propTypes = {
    ashanasFullList: PropTypes.object.isRequired,
    onAddAshana: PropTypes.func,
    showDescription: PropTypes.bool,
    inline: PropTypes.bool,
  }
  render() {
    // TODO: get ashana data from ashanasFullList
    const inline = this.props.inline ? 'list-inline' : '';
    const ashanasToShow =
    _.values(this.props.ashanas ? this.props.ashanas : this.props.ashanasFullList);

    return (
      <ul className={`ashana-list list-group ${inline}`}>
        {
          ashanasToShow.length > 0 ?
            ashanasToShow.map(
              (ashana, index) =>
                <li className="list-group-item ashana-item"
                  key={`${ashana.ashanaId}${index}`}>
                  <div>
                    <img src={ashana.imageUrl} alt="" />
                    {
                      this.props.showDescription &&
                      <div className="description">
                        <p>{ashana.name}</p>
                        <hr />
                        <p>{ashana.sanskritName}</p>
                      </div>
                    }
                  </div>
                  { this.props.onAddAshana && (
                    <div className="add-ashana-container">
                      <button
                        type="button"
                        className="btn-clear"
                        onClick={() => this.props.onAddAshana(ashana)}>
                        <i className="glyphicon glyphicon-plus" />
                      </button>
                    </div>
                  ) }
                </li>,
            )
          : <li className="list-group-item">No Ashanas yet!</li>
        }
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    ashanasFullList: state.ashana.ashanasFullList,
  };
}

export default connect(mapStateToProps)(AshanaList);
