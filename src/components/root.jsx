import React from 'react';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { TodoApp } from '../components/TodoApp';
import { PropTypes } from 'prop-types';

const Root = ({ store }) => (
  <MuiThemeProvider>
    <Provider store={store}>
      <TodoApp />
    </Provider>
  </MuiThemeProvider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root;
