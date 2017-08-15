import React from 'react';

let nextTodoId = 0;
export const AddTodo = ({
  store
}) => {
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
