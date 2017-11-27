import React from 'react';
import PropTypes from 'prop-types';

export default class TodoItem extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <li>
        {this.props.name} and I&apos;m {this.props.isCompleted ? 'completed' : 'in progress'}
      </li>
    );
  }
}

TodoItem.propTypes = {
  name: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
};
