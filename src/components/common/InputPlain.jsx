import React, { Component } from 'react';

export default class InputPlain extends Component {
  render() {
    return (
      <input
        {...this.props}
        className="input-no-border"
        onFocus={e => e.target.placeholder=''}
        onBlur={e => e.target.placeholder=this.props.placeholder}
      />
    )
  }
}
