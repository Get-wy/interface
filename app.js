/*
 * @Author: solomonyuu@gmail.com
 * @Date: 2020-03-09 11:39:58
 * @LastEditors: solomonyuu@gmail.com
 * @LastEditTime: 2020-03-13 10:35:56
 */
import Koa from 'koa'
import ip from 'ip'

import router from './routes'
import conf from './config'
import middleware from './middleware'

import './mogodb'

const app = new Koa()
//const cors = require('koa2-cors');

// 具体参数我们在后面进行解释
// app.use(cors({
//     exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
//     maxAge: 5,
//     credentials: true,
//     allowMethods: ['GET', 'POST', 'DELETE'],
//     allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
// }))

// 捕获每一步异常
app.use(async (ctx, next) => {
  try {
    await next();
  } catch(e) {
  console.log(e)
  }
});

middleware(app)
router(app)
app.listen(conf.port, '0.0.0.0', () => {
  console.log(`server is running at http://${ip.address()}:${conf.port}`)
})

module.exports = app



/*
 初始生成 废弃
// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'ejs'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
*/