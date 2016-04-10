import React from 'react';

import MessageList from './MessageList.jsx';

export default class AdminPanel extends React.Component {
  render() {
    const {
      title,
      messages,
    } = this.props;

    return (
        <div>
          <h1>{title}</h1>
          <MessageList messages={messages}/>
        </div>
    );
  }
};
