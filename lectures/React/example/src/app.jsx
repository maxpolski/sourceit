import React from 'react';
import { render } from 'react-dom';

import TodoList from './components/TodoList';

import './assets/style.css';

const node = document.getElementById('app');

render(
  <TodoList />,
  node,
);
