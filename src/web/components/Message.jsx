import React from 'react';

export default class Message extends React.Component {
  render() {
    const {
      name,
      email,
      message,
    } = this.props;

    return (
        <div>
          <a href={`mailto:${email}`}>{name}</a>: {message}
        </div>
    );
  }
}
