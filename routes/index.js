/*
 * @Author: solomonyuu@gmail.com
 * @Date: 2020-03-09 11:39:58
 * @LastEditors: solomonyuu@gmail.com
 * @LastEditTime: 2020-03-10 10:32:26
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
    // 用户请
    router.get('/', async (ctx, next) => {
      console.log('----------------用户信息-----------------------');
      // let _id = ctx.request.query._id;
      try {
        let data = await ctx.findOne(userModel, {name: 123})
        console.log(data)
        ctx.send({message: '登录成功',data:data});
      } catch (e){
        ctx.sendError(e)
      }
    })

    app.use(router.routes()).use(router.allowedMethods());
}