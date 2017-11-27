import React from 'react';
import PropTypes from 'prop-types';

export default class TodoItem extends React.Component {
  handleClick = () => this.props.toggleTodo(this.props.id);

  render() {
    return (
      <li className="todo-item" onClick={this.handleClick}>
        {this.props.name} and I&apos;m {this.props.isCompleted ? 'completed' : 'in progress'}
      </li>
    );
  }
}

TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  toggleTodo: PropTypes.func.isRequired,
};
