import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions/toggleTodo';

import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import {pinkA200, black200} from 'material-ui/styles/colors';
import { withRouter } from 'react-router';
import { getVisibleTodos } from '../reducers/todoApp';

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

// Component
const mapStateToProps = (state, { params }) => ({
  todos: getVisibleTodos(
    state,
    params.filter || 'all'
  )
})

export const VisibleTodoList = withRouter(connect(
  mapStateToProps,
  { onTodoClick: toggleTodo }
)(TodoList));
