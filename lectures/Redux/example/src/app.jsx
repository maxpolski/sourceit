import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import TodoList from './components/TodoList';
import store from './store';

import './assets/style.css';

const node = document.getElementById('app');

console.log('store', store);

render(
  <Provider store={store}>
    <TodoList />
  </Provider>,
  node,
);
