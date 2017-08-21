import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import { todos } from './reducers/todos';
import { visibilityFilter } from './reducers/visibilityFilter';

import { TodoApp } from './components/TodoApp';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { loadState, saveState } from './localStorage';
import throttle from 'lodash/throttle';

const todoApp = combineReducers({
  todos,
  visibilityFilter
})

const persistedState = loadState();

const store = createStore(todoApp, persistedState);
store.subscribe(throttle(() => {
  saveState({
    todos: store.getState().todos
  })
}, 1000))

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <TodoApp />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
