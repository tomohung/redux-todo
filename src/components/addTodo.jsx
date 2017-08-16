import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/addTodo';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export let AddTodo = ({ dispatch }) => {
  let input;
  return (
    <div>
      <TextField ref={node => {
          input = node.input;
      }}
      id='addTodo'
      />
      <RaisedButton onClick={() => {
          dispatch(addTodo(input.value));
          input.value = '';
          input.focus();
      }} >
        Add Todo
      </RaisedButton>
    </div>
  )
}

AddTodo = connect()(AddTodo);
