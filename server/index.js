import Koa from 'koa';
import proxy from './proxy';
import render from './render';
import bodyparser from 'koa-bodyparser';
import handleStatice from 'koa-static';

const app = new Koa();
app.use(handleStatice('public')); //静态文件服务
app.use(bodyparser()); // 解析 body 到 ctx.request.body
app.use(proxy('/api', 'http://localhost:3000')); // /api 开头的请求转发到 http://localhost:3000
app.use(render); // 首屏渲染

app.listen(3001); // 启动服务并监听3001端口
