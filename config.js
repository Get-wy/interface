/*
 * @Author: solomonyuu@gmail.com
 * @Date: 2020-03-09 11:59:59
 * @LastEditors: solomonyuu@gmail.com
 * @LastEditTime: 2020-03-13 10:35:48
 */
import path from 'path'
const auth = {
	admin_secret: 'admin-token',
	tokenKey: 'Token-Auth',
	whiteList: ['login', 'client_api'],
	blackList: ['admin_api']
}
const port = process.env.NODE_ENV === 'production' ? '4000' : '5000'

export default {
	env: process.env.NODE_ENV,
	port,
	auth,
	//log,
	mongodb: {
		username: 'admin',
		pwd: 123456,
		address: 'localhost:27017',
		db: 'admin'
	}
}