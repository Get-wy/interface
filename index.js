/*
 * @Author: solomonyuu@gmail.com
 * @Date: 2020-03-09 13:22:58
 * @LastEditors: solomonyuu@gmail.com
 * @LastEditTime: 2020-03-09 14:28:02
 */
require('babel-core/register') // babel编译
module.exports = require('./app.js')
//./node_modules/.bin/nodemon bin/www --exec babel-node