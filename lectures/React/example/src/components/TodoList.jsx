import React, { Component } from 'react';

import TodoItem from './TodoItem';

export default class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todos: [{
        id: 1,
        name: 'Buy milk',
        isCompleted: false,
      }, {
        id: 2,
        name: 'Feed cat',
        isCompleted: true,
      }],
    };
  }

  render() {
    return (
      <div>
        Hello I'm the TodoList Component
        <ul>
          {
            this.state.todos.map(todo => (
              <TodoItem
                key={todo.id}
                name={todo.name}
                isCompleted={todo.isCompleted}
              />
            ))
          }
        </ul>
      </div>
    );
  }
}
