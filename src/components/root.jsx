import React from 'react';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { TodoApp } from '../components/TodoApp';
import { PropTypes } from 'prop-types';
import { Router, Route, browserHistory } from 'react-router';

const Root = ({ store }) => (
  <MuiThemeProvider>
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/(:filter)" component={TodoApp} />
      </Router>
    </Provider>
  </MuiThemeProvider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root;
