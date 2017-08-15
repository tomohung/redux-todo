import React from 'react';
import { Footer } from './footer';

let nextTodoId = 0;

// Container Component
export const TodoApp = ({
  todos,
  visibilityFilter,
  store
}) => {
    return (
      <div>
        <AddTodo
          onAddClick={text =>
            store.dispatch({
              type: 'ADD_TODO',
              id: nextTodoId++,
              text
            })
          }
        />
        <TodoList
          todos={
            getVisibleTodos(
              todos,
              visibilityFilter
            )
          }
          onTodoClick={id =>
            store.dispatch({
              type: 'TOGGLE_TODO',
              id
            })
          } />
        <Footer
          store={store}
        />
      </div>
    )
};

// Presentational Components
const TodoList = ({
  todos,
  onTodoClick
}) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />
    )}
  </ul>
);

const Todo = ({
  onClick,
  completed,
  text
}) => (
  <li
    onClick={onClick}
    style={{
      textDecoration:
              completed ?
              'line-through' :
              'none'
    }}>
    {text}
  </li>
);

const AddTodo = ({
  onAddClick
}) => {
  let input;
  return (
    <div>
      <input ref={node => {
          input = node;
      }} />
      <button onClick={() => {
          onAddClick(input.value);
          input.value = '';
          input.focus();
      }} >
        Add Todo
      </button>
    </div>
  )
}

// Helpers
const getVisibleTodos = (
  todos,
  filter
) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(
        t => t.completed
      );
    case 'SHOW_ACTIVE':
      return todos.filter(
        t => !t.completed
      );
    default:
      return todos;
  }
}
