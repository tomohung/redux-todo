import React from 'react';
import { Footer } from './footer';
import { VisibleTodoList } from './visibleTodoList';
import { AddTodo } from './addTodo';

export const TodoApp = ({
  store
}) => {
  return (
    <div>
      <AddTodo
        store={store}
      />
      <VisibleTodoList
        store={store}
      />
      <Footer
        store={store}
      />
    </div>
  )
};
