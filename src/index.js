import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import { todos } from './reducers/todos';
import { visibilityFilter } from './reducers/visibilityFilter';

import { TodoApp } from './components/todoApp';

const todoApp = combineReducers({
  todos,
  visibilityFilter
})

ReactDOM.render(
  <Provider store={createStore(todoApp)}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);
