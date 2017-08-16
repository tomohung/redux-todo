import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

let nextTodoId = 0;
export let AddTodo = ({ dispatch }) => {
  let input;
  return (
    <div>
      <input ref={node => {
          input = node;
      }} />
      <button onClick={() => {
          dispatch({
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

AddTodo = connect()(AddTodo);
