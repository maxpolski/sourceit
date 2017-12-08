import React from 'react';
import { render } from 'react-dom';

import TodoList from './components/TodoList';

import './assets/style.scss';

const node = document.getElementById('app');

render(
  <TodoList />,
  node,
);
