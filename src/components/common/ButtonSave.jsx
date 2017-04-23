import React, { Component } from 'react';

export default class ButtonSave extends Component {
  render() {
    return (
      <button
        type="button"
        className="btn-clear btn-primary-color btn-big vcenter"
        {...this.props}>
        <i className="glyphicon glyphicon-ok-sign"></i>
      </button>
    )
  }
};
