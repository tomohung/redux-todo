import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions/toggleTodo';
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../constants/ActionTypes';

import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import {pinkA200, black200} from 'material-ui/styles/colors';

const TodoList = ({
  todos,
  onTodoClick
}) => (
  <List>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />
    )}
  </List>
);

const Todo = ({
  onClick,
  completed,
  text
}) => (
  <ListItem
    leftIcon={<ContentInbox color={completed? pinkA200 : black200}/>}
    primaryText={text}
    onClick={onClick}
    style={{
      textDecoration:
              completed ?
              'line-through' :
              'none'
    }}/>
);

// Helpers
const getVisibleTodos = (
  todos,
  filter
) => {
  switch (filter) {
    case SHOW_ALL:
      return todos;
    case SHOW_COMPLETED:
      return todos.filter(
        t => t.completed
      );
    case SHOW_ACTIVE:
      return todos.filter(
        t => !t.completed
      );
    default:
      return todos;
  }
}

// Component
const mapStateToProps = (state) => ({
  todos: getVisibleTodos(
    state.todos,
    state.visibilityFilter
  )
})

const mapDispatchToProps = (dispatch) => ({
  onTodoClick: (id) => {
    dispatch(toggleTodo(id));
  }
})

export const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
