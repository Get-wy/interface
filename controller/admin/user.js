/*
 * @Author: solomonyuu@gmail.com
 * @Date: 2020-03-10 16:25:27
 * @LastEditors: solomonyuu@gmail.com
 * @LastEditTime: 2020-03-10 16:35:34
 */
import userModel from '../../models/user'
import conf from '../../config'

module.exports = {
  async getUser(ctx, next) {
    let { name } = ctx.request.query
    try {
      let data = await ctx.findOne(userModel, {name: name})
      ctx.send(data);
    } catch (e){
      ctx.sendError(e)
    }
  }
}