import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import TodoItem from './TodoItem';
import NewTodoInput from './NewTodoInput';

class TodoList extends Component {
  // toggleTodo = (id) => {
  //   const todoIndex = this.state.todos.findIndex(todo => todo.id === id); // 0
  //   const changedTodo = {
  //     ...this.state.todos[todoIndex],
  //     isCompleted: !this.state.todos[todoIndex].isCompleted,
  //   };
  //   const newTodosList = [
  //     ...this.state.todos.slice(0, todoIndex),
  //     changedTodo,
  //     ...this.state.todos.slice(todoIndex + 1, this.state.todos.length),
  //   ];

  //   this.setState({ todos: newTodosList });
  // }

  // addNewTodo = (newTodoText) => {
  //   const newTodoId = this.state.todos[this.state.todos.length - 1].id + 1;
  //   this.setState({
  //     todos: [
  //       ...this.state.todos,
  //       {
  //         id: newTodoId,
  //         name: newTodoText,
  //         isCompleted: false,
  //       },
  //     ],
  //   });
  // }

  foo = () => {}

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
                // toggleTodo={this.toggleTodo}
              />
            ))
          }
        </ul>
        {/* <NewTodoInput addNewTodo={this.addNewTodo} /> */}
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
};

export default connect(mapStateToProps)(TodoList);
