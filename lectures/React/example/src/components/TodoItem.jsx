import React from 'react';

export default class TodoItem extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <li>
        {this.props.name} and I'm {this.props.isCompleted ? 'completed' : 'in progress'}
      </li>
    );
  }
}
