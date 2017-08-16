import React from 'react';
import { Footer } from './Footer';
import { VisibleTodoList } from './VisibleTodoList';
import { AddTodo } from './AddTodo';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';

const style = {
  textAlign: 'center',
  display: 'inline-block',
}

export const TodoApp = () => {
  return (
    <Paper style={style} zDepth={1}>
      <Subheader>Todo List </Subheader>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </Paper>
  )
};
