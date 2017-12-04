import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import TodoItem from './TodoItem';
import NewTodoInput from './NewTodoInput';
import { addTodo, toggleTodo } from '../actions/todos';

class TodoList extends Component {
  toggleTodo = (id) => {
    const todoToChange = this.props.todos.find(todo => todo.id === id);
    this.props.toggleTodoAction(todoToChange);
  }

  addNewTodo = (newTodoText) => {
    const newTodoId = Date.now();
    const newTodo = {
      id: newTodoId,
      name: newTodoText,
      isCompleted: false,
    };

    this.props.addTodoAction(newTodo);
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

const mapDispatchToProps = dispatch => ({
  addTodoAction: addTodo(dispatch),
  toggleTodoAction: toggleTodo(dispatch),
});

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    isCompleted: PropTypes.bool,
  })).isRequired,
  addTodoAction: PropTypes.func.isRequired,
  toggleTodoAction: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
