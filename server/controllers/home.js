module.exports = {
  'get /': async ctx => {
    await ctx.render('index', {
      title: 'Home page',
      message: 'Welcome to my space, This is the Home page.'
    });
  }
};
