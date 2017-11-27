import React from 'react';
import { render } from 'react-dom';

import TodoList from './components/TodoList';

const node = document.getElementById('app');

render(
  <TodoList />,
  node
);
