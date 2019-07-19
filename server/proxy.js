import axios from 'axios';

export default function proxy(pattern, address) {
  const request = axios.create({ baseURL: address });
  return async (ctx, next) => {
    if (new RegExp(`^${pattern}`).test(ctx.path)) {
      const method = ctx.method.toLowerCase();
      const config = {
        method,
        url: ctx.url
      };
      if (ctx.request.body) {
        config.data = ctx.request.body;
      }
      const { data } = await request(config);
      ctx.response.type = 'application/json; charset=utf-8';
      ctx.response.body = data;
    } else {
      await next();
    }
  };
}
