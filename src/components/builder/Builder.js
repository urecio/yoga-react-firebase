import React, { Component } from 'react';
import { Link } from 'react-router';
import './Builder.scss';
import Ashanas from '../ashanas/Ashanas';
import Sequence from '../sequence/Sequence';

export default class Builder extends Component {
  render() {
    return (
      <div className="builder container-fluid">
        <div className="row">
          <div className="col-md-3">
            <Ashanas />
          </div>
          <div className="col-md-8">
            <Sequence />
          </div>
        </div>
      </div>
    );
  }
}
