const defaultState = [{
  id: 1,
  name: 'Buy milk',
  isCompleted: false,
}, {
  id: 2,
  name: 'Feed cat',
  isCompleted: true,
}];

export default (state = defaultState, action) => state;
