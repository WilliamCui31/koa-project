import request from './request';

export default async (ctx, next) => {
  if (/^\/api/.test(ctx.path)) {
    const { data } = await request[ctx.method.toLowerCase()](ctx.path);
    ctx.response.type = 'application/json; charset=utf-8';
    ctx.response.body = data;
  } else {
    await next();
  }
};
