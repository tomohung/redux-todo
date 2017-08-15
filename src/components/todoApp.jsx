import React from 'react';
import { Footer } from './Footer';
import { VisibleTodoList } from './VisibleTodoList';
import { AddTodo } from './AddTodo';

export const TodoApp = () => {
  return (
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  )
};
