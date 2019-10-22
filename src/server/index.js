import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../shared/components/app/App';

export default () => {
const content = renderToString(
    <App />
  );
  return `
    <html>
      <head>
        <link rel="stylesheet" href="/public/css/main.css"></link>
      </head>
      <body>
        <div id="root">${content}</div>
        <script src='/public/bundle.js'></script>
      </body>
    </html>
  `;
};
