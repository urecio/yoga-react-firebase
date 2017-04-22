import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AshanaList extends Component {
  static propTypes = {
    ashanas: PropTypes.arrayOf(PropTypes.object).isRequired,
    onAddAshana: PropTypes.func,
    showDescription: PropTypes.bool,
    inline: PropTypes.bool,
  }
  render() {
    const inline = this.props.inline ? 'list-inline' : '';
    return (
      <ul className={`ashana-list list-group ${inline}`}>
        {
          this.props.ashanas.length > 0 ?
            this.props.ashanas.map(
              (ashana, index) =>
                <li className="list-group-item ashana-item"
                  key={`${ashana.sanskritName}${index}`}>
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
