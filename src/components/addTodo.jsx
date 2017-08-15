import React from 'react';
import PropTypes from 'prop-types';

let nextTodoId = 0;
export const AddTodo = (props, { store }) => {
  let input;
  return (
    <div>
      <input ref={node => {
          input = node;
      }} />
      <button onClick={() => {
          store.dispatch({
            type: 'ADD_TODO',
            id: nextTodoId++,
            text: input.value
          })
          input.value = '';
          input.focus();
      }} >
        Add Todo
      </button>
    </div>
  )
}

AddTodo.contextTypes = {
  store: PropTypes.object
}
