import React, { Component } from 'react';

import TodoItem from './TodoItem';
import NewTodoInput from './NewTodoInput';

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

  addNewTodo = (newTodoText) => {
    const newTodoId = this.state.todos[this.state.todos.length - 1].id + 1;
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: newTodoId,
          name: newTodoText,
          isCompleted: false,
        },
      ],
    });
  }

  render() {
    return (
      <div>
        Hello I&apos;m the TodoList Component
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
        <NewTodoInput addNewTodo={this.addNewTodo} />
      </div>
    );
  }
}
