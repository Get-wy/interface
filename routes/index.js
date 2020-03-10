/*
 * @Author: solomonyuu@gmail.com
 * @Date: 2020-03-09 11:39:58
 * @LastEditors: solomonyuu@gmail.com
 * @LastEditTime: 2020-03-10 16:35:20
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


import userModel from '../models/user'


export default app => {

/*----------------------admin-------------------------------*/
    // 查询用户是否存在 get /get?name:xxx
    router.get('/get', app.admin.user.getUser)

    

    app.use(router.routes()).use(router.allowedMethods());
}