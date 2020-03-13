/*
 * @Author: solomonyuu@gmail.com
 * @Date: 2020-03-09 13:10:48
 * @LastEditors: solomonyuu@gmail.com
 * @LastEditTime: 2020-03-10 17:38:51
 */
import db from '../mogodb'
let user = db.Schema({
  name: String,
  pwd:String
})
export default db.model('test', user)