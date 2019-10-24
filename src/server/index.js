import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import Routes from '../shared/Routes/routes';

export default (url, store) => {
  const content = renderToString(
    <Provider store={store} >
      <StaticRouter location={url} context={{}}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
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
