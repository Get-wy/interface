/*
 * @Author: solomonyuu@gmail.com
 * @Date: 2020-03-09 11:39:58
 * @LastEditors: solomonyuu@gmail.com
 * @LastEditTime: 2020-03-13 10:06:38
 */
/*const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  // await ctx.render('index', {
  //   title: 'Hello Koa!'
  // })
  ctx.body = '默认目录'
  router.get('/', app.admin.user.info)
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router

*/
import koaRouter from 'koa-router'
const router = koaRouter()


export default app => {

/*----------------------admin-------------------------------*/
    // 查询用户是否存在 get /get?name:xxx
    router.get('/get', app.admin.user.getUser)
    // 添加用户psot /add {name:xxx,pwd:xxx}
    router.post('/add', app.admin.user.addUser)
    // 修改用户psot /update {name:xxx,pwd:xxx}
    router.post('/update', app.admin.user.updateUser)
    // 删除用户 get /get?name:xxx
    router.get('/delUser', app.admin.user.delUser)

    app.use(router.routes()).use(router.allowedMethods());
}