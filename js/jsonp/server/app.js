const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')()

router.get('/api',(ctx) => {
  // console.log(ctx)
  const data = {
    name: 'zll',
    age: 18
  }
  const callback = ctx.query.jsonpcallback
  if(callback) {
    ctx.body = callback + '('+JSON.stringify(data)+')'
  } else {
    ctx.body = data;
  }
})
app.use(router.routes())
app.listen(3000)