import { getAllTodos } from '../api/todos';

export const GET_INITIAL_TODOS = 'GET_INITIAL_TODOS';
export const ADD_TODO = 'ADD_TODO';
export const CHANGE_TODO_STATUS = 'CHANGE_TODO_STATUS';

export const getInitialTodos = dispatch => () => {
  dispatch({
    type: GET_INITIAL_TODOS,
    payload: [],
  });
};

export const addTodo = dispatch => newTodo => dispatch({
  type: ADD_TODO,
  payload: newTodo,
});

export const toggleTodo = dispatch => todoToChange => dispatch({
  type: CHANGE_TODO_STATUS,
  payload: todoToChange,
});
