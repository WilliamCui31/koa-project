const fs = require('fs');

function addSubRoutes(Router, subRouter) {
  const router = new Router();
  for (let key in subRouter) {
    const [method, path] = key.split(' ');
    if (router[method]) {
      router[method](path, subRouter[key]);
    }
  }

  return router;
}

function addRoutes(Router, dir = '/controllers') {
  const router = new Router();
  const files = fs.readdirSync(__dirname + dir);

  files.forEach(file => {
    const subRouter = require(__dirname + dir + '/' + file);
    const route = addSubRoutes(Router, subRouter);
    const [fileName, _] = file.split('.');
    if (fileName === 'home') {
      router.use('/', route.routes(), route.allowedMethods());
    } else {
      router.use(`/${fileName}`, route.routes(), route.allowedMethods());
    }
  });

  router.get('*', async ctx => {
    await ctx.render('404', { title: 'Not Found' });
  });

  return router;
}

module.exports = addRoutes;
