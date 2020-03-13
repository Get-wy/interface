/*
 * @Author: solomonyuu@gmail.com
 * @Date: 2020-03-10 16:25:27
 * @LastEditors: solomonyuu@gmail.com
 * @LastEditTime: 2020-03-13 10:05:47
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
  },

  async addUser(ctx, next) {
    let params = ctx.request.body
    if(!params.pwd || !params.name ) {
      return ctx.sendError('请输入正确的用户名和密码')
    }
    try {
      let save = await ctx.findOne(userModel, {name:params.name})
      if(save){
        ctx.sendError('用户已存在')
      } else {
        let data = await ctx.add(userModel, params)
        ctx.send(data)
      }
    } catch (e) {
      ctx.sendError(e)
    }
  },

  async updateUser(ctx, next) {
    let params = ctx.request.body
    try {
      let save = await ctx.findOne(userModel, {name:params.name})
      if(!save){
        ctx.sendError('用户不存在')
      } else {
        let data = await ctx.update(userModel, {name: params.name}, params)
        ctx.send(data)
      }
    } catch (e) {
      ctx.sendError(e)
    }
  },

  async delUser(ctx, next) {
    let params = ctx.request.query
    try {
      let data = await ctx.findOne(userModel, {name: params.name})
      if(!data) {
        ctx.sendError("该用户不存在")
      } else {
        let data = await ctx.remove(userModel, {name: params.name})
        ctx.send(data)
      }
    } catch(e) {
      ctx.sendError(e)
    }
  }
}