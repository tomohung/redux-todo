import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions/toggleTodo';
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../constants/ActionTypes';

import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import {pinkA200, black200} from 'material-ui/styles/colors';
import { withRouter } from 'react-router';

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
    case 'all':
      return todos;
    case 'completed':
      return todos.filter(
        t => t.completed
      );
    case 'active':
      return todos.filter(
        t => !t.completed
      );
    default:
      throw new Error(`Unknow filter: ${filter}`);
  }
}

// Component
const mapStateToProps = (state, { params }) => ({
  todos: getVisibleTodos(
    state.todos,
    params.filter || 'all'
  )
})

const mapDispatchToProps = (dispatch) => ({
  onTodoClick: (id) => {
    dispatch(toggleTodo(id));
  }
})

export const VisibleTodoList = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList));
