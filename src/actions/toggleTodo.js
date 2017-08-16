export { TOGGLE_TODO } from '../constants/ActionTypes';

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}
