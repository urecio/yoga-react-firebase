import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// components
import Builder from './components/builder/Builder';
import Sequences from './components/sequence/SequenceList';
// reducers
import reducers from './reducers';
// styles
import './common/styles/index.scss';

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <ul>
          <li><Link to="/">Builder</Link></li>
          <li><Link to="/sequences">Sequences</Link></li>
        </ul>
        <hr />
        <Route exact path="/" component={Builder} />
        <Route path="/sequences" component={Sequences} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
