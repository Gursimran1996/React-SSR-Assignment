// Startup point for the client side application
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../shared/components/app/app';

ReactDOM.hydrate(
    <App />,
    document.querySelector('#root')
  );
