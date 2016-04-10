import React from 'react';
import { render } from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

import App from './components/App.jsx';

const DevTools = createDevTools(
    <DockMonitor toggleVisibilityKey='ctrl-h'
                 changePositionKey='ctrl-q'>
      <LogMonitor theme="tomorrow"/>
    </DockMonitor>
);

// accepts state (the existing state of the app)
// and an action (what to do with the state)
function reducer(
  state = {
    messages: [],
    contactInfo: {}
  }, action) {

  switch (action.type) {
    case 'ADD_MESSAGE':
      return {
        messages: [...state.messages, action.data],
        contactInfo: state.contactInfo,
      };
    case 'UPDATE_CONTACT_INFO':
      return {
        messages: state.messages,
        contactInfo: action.data,
      };
    default: return state;
  }
}

const enhancer = compose(
    applyMiddleware(),
    DevTools.instrument()
);

const store = createStore(reducer, undefined, enhancer);

render((
  <Provider store={store}>
      <div>
        <App api="http://localhost:8392/api"/>
        <DevTools/>
    </div>
  </Provider>
), document.getElementById('container'));
