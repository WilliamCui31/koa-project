import Koa from 'koa';
import rest from './rest';
import render from './render';
import handleStatice from 'koa-static';

const app = new Koa();
app.use(handleStatice('public')); //静态文件服务
app.use(rest); // 转发请求到 http://localhost:3000
app.use(render); // 首屏渲染

app.listen(3001); // 启动服务并监听3001端口
