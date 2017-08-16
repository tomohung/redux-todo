import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/addTodo';

export let AddTodo = ({ dispatch }) => {
  let input;
  return (
    <div>
      <input ref={node => {
          input = node;
      }} />
      <button onClick={() => {
          dispatch(addTodo(input.value));
          input.value = '';
          input.focus();
      }} >
        Add Todo
      </button>
    </div>
  )
}

AddTodo = connect()(AddTodo);
