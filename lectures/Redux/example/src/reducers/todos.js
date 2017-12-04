import {
  ADD_TODO,
  CHANGE_TODO_STATUS,
  GET_INITIAL_TODOS,
} from '../actions/todos';

const defaultState = [{
  id: 1,
  name: 'Buy milk',
  isCompleted: false,
}, {
  id: 2,
  name: 'Feed cat',
  isCompleted: true,
}];

export default (state = defaultState, action) => {
  let todoIndex;
  let newState;
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case CHANGE_TODO_STATUS:
      todoIndex = state.findIndex(todo => todo.id === action.payload.id);
      newState = [
        ...state.slice(0, todoIndex),
        {
          ...state[todoIndex],
          isCompleted: !action.payload.isCompleted,
        },
        ...state.slice(todoIndex + 1, state.length),
      ];
      return newState;
    case GET_INITIAL_TODOS:
      return action.payload.map(todo => ({ ...todo, name: todo.title }));
    default:
      return state;
  }
};
