module.exports = {
  'get /': async ctx => {
    await ctx.render('index', {
      title: 'Admin page',
      message: 'Nice to meet you, welcome to the Admin page.'
    });
  },
  'get /error': async ctx => {
    await ctx.render('index', {
      title: 'Error page',
      message: 'Sorry, your are enter to the error page.'
    });
  }
};
