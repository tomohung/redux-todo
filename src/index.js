import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, combineReducers } from 'redux';
import { todos } from './reducers/todos';
import { visibilityFilter } from './reducers/visibilityFilter';

import { TodoApp } from './components/todoApp';

const todoApp = combineReducers({
  todos,
  visibilityFilter
})

const store = createStore(todoApp);

const render = () => {
  ReactDOM.render(
    <TodoApp
      {...store.getState()}
      store={store}
      />,
    document.getElementById('root')
  );
};

store.subscribe(render);
render();
