import React from 'react';
import Routes from '../client/Routes';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes, matchRoutes } from 'react-router-config';
import { getStore } from '../client/store';

export default async ctx => {
  const store = getStore();
  // 根据路由的路径，来往store里面加数据
  const matchedRoutes = matchRoutes(Routes, ctx.path);
  const promises = [];
  matchedRoutes.forEach(item => {
    if (item.route.loadData) {
      const promise = new Promise((resolve, reject) => {
        item.route
          .loadData(store)
          .then(resolve)
          .catch(resolve);
      });
      promises.push(promise);
    }
  });

  await Promise.all(promises);

  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={ctx.path}>{renderRoutes(Routes)}</StaticRouter>
    </Provider>
  );
  ctx.body = `
  <html>
    <head>
      <title>hello ssr</title>
    </head>
    <body>
      <div id="root">${content}</div>
      <script>
        window.context = {
          state: ${JSON.stringify(store.getState())}
        }
      </script>
      <script src="/index.js"></script>
    </body>
  </html>
 `;
};
