import { ADD_TODO } from '../actions/todos';

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
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    default:
      return state;
  }
};
