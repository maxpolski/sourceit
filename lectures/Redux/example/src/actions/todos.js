import {
  getAllTodos,
  addTodo as addTodoAPICall,
  toggleTodo as toggleTodoAPICall,
} from '../api/todos';

export const GET_INITIAL_TODOS = 'GET_INITIAL_TODOS';
export const ADD_TODO = 'ADD_TODO';
export const CHANGE_TODO_STATUS = 'CHANGE_TODO_STATUS';

export const getInitialTodos = dispatch => () =>
  getAllTodos()
    .then((todoList) => {
      dispatch({
        type: GET_INITIAL_TODOS,
        payload: todoList,
      });
    });

export const addTodo = dispatch => newTodo =>
  addTodoAPICall({ todo: { title: newTodo.name } })
    .then(() => dispatch({
      type: ADD_TODO,
      payload: newTodo,
    }));

export const toggleTodo = dispatch => todoToChange =>
  toggleTodoAPICall({
    todo: {
      ...todoToChange,
      title: todoToChange.name,
      isCompleted: !todoToChange.isCompleted,
    },
  }).then(() => dispatch({
    type: CHANGE_TODO_STATUS,
    payload: todoToChange,
  }));
