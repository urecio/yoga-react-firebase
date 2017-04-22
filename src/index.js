import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import createBrowserHistory from 'history/createBrowserHistory';
// components
import App from './components/app/App';
// reducers
import reducers from './reducers';
// browser history
const newHistory = createBrowserHistory();

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Router history={newHistory}>
      <div>
        <Route path="/" component={App} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
