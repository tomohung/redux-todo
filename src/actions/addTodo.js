import { ADD_TODO } from '../constants/ActionTypes';
import { v4 } from 'node-uuid';

export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    id: v4(),
    text
  }
}
