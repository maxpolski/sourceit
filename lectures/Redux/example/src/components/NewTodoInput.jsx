import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class NewTodoInput extends Component {
  handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      this.props.addNewTodo(event.target.value);
      event.target.value = '';
    }
  }

  render() {
    return (
      <input
        type="text"
        onKeyDown={this.handleKeyDown}
      />
    );
  }
}

NewTodoInput.propTypes = {
  addNewTodo: PropTypes.func.isRequired,
};
