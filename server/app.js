const Koa = require('koa');
const path = require('path');
const views = require('koa-views');
const Router = require('koa-router');
const routes = require('./routes');

const app = new Koa();
const router = routes(Router);

app.use(views(path.join(__dirname, './views'), { extension: 'ejs' })); // 静态模板引擎配置

app.use(router.routes()).use(router.allowedMethods()); // 路由配置

app.listen(2000); // 启动服务并监听2000端口
