import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import { todos } from './reducers/todos';
import { visibilityFilter } from './reducers/visibilityFilter';

import { TodoApp } from './components/TodoApp';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const todoApp = combineReducers({
  todos,
  visibilityFilter
})

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={createStore(todoApp)}>
      <TodoApp />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
