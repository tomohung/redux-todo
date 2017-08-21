import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import { todos } from './reducers/todos';
import { visibilityFilter } from './reducers/visibilityFilter';

import { TodoApp } from './components/TodoApp';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { loadState, saveState } from './localStorage';

const todoApp = combineReducers({
  todos,
  visibilityFilter
})

const persistedState = {
  todos: loadState().todos
}
const store = createStore(todoApp, persistedState);
store.subscribe(() => {
  saveState({
    todos: store.getState().todos
  })
})

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <TodoApp />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
