/*
 * @Author: solomonyuu@gmail.com
 * @Date: 2020-03-09 11:39:58
 * @LastEditors: solomonyuu@gmail.com
 * @LastEditTime: 2020-04-28 10:25:29
 */
import Koa from 'koa'
import ip from 'ip'

// 在node 服务文件 app.js 中引入 koa-connect-history-api-fallback
// 注意： 该引用须在 const serve = require('koa-static'); 前
const history = require('koa-connect-history-api-fallback');

import router from './routes'
import conf from './config'
import middleware from './middleware'

import './mogodb'

// 插件默认会将所有的请求都指向到index.html，这样可能就会导致项目内其他路由也被指向到index.html，导致接口报错。
// 解决方法：使用koa2-connect-history-api-fallback npm地址 该插件增加了请求白名单。
const { historyApiFallback } = require('koa2-connect-history-api-fallback');


const app = new Koa()

app.use(history());

app.use(require('koa-static')(__dirname + '/public/dist'))

app.use(historyApiFallback({ whiteList: ['/api'] }));

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