import Koa from 'koa';
import React from 'react';
import handleStatice from 'koa-static';
import Routes from '../client/Routes';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

const app = new Koa();
app.use(handleStatice('public'));
app.use(async ctx => {
  const content = renderToString(
    <StaticRouter location={ctx.path}>{renderRoutes(Routes)}</StaticRouter>
  );
  ctx.body = `
  <html>
    <head>
      <title>hello ssr</title>
    </head>
    <body>
      <div id="root">${content}</div>
      <script src="/index.js"></script>
    </body>
  </html>
 `;
});

app.listen(3001); // 启动服务并监听2000端口
