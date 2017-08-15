import React from 'react';
import { Footer } from './footer';
import { VisibleTodoList } from './visibleTodoList';
import { AddTodo } from './addTodo';

export const TodoApp = () => {
  return (
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  )
};
