import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import TodoItem from './TodoItem';
import NewTodoInput from './NewTodoInput';
import { ADD_TODO, CHANGE_TODO_STATUS } from '../actions/todos';

class TodoList extends Component {
  toggleTodo = (id) => {
    const todoToChange = this.props.todos.find(todo => todo.id === id);
    this.props.dispatch({
      type: CHANGE_TODO_STATUS,
      payload: todoToChange,
    });
  }

  addNewTodo = (newTodoText) => {
    const newTodoId = Date.now();
    const newTodo = {
      id: newTodoId,
      name: newTodoText,
      isCompleted: false,
    };

    this.props.dispatch({
      type: ADD_TODO,
      payload: newTodo,
    });
  }

  render() {
    return (
      <div>
        Hello I&apos;m the TodoList Component
        <ul>
          {
            this.props.todos.map(todo => (
              <TodoItem
                key={todo.id}
                id={todo.id}
                name={todo.name}
                isCompleted={todo.isCompleted}
                toggleTodo={this.toggleTodo}
              />
            ))
          }
        </ul>
        <NewTodoInput addNewTodo={this.addNewTodo} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos,
});

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    isCompleted: PropTypes.bool,
  })).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(TodoList);
