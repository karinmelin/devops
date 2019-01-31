const Router = require('koa-router')
const router = new Router()

router.get('/api/todo/', ctx => {
  ctx.body = [{
    id: 123456,
    name: "Do thing",
    isComplete: false
  }]
})

router.get('/api/todo/:id', ctx => {
  ctx.body = {
    id: ctx.params.id,
    name: "Do thing",
    isComplete: false
  }
})

module.exports = router