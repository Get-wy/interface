<!--
 * @Author: solomonyuu@gmail.com
 * @Date: 2020-03-10 10:45:57
 * @LastEditors: solomonyuu@gmail.com
 * @LastEditTime: 2020-03-10 10:53:32
 -->
# interface
基于koa+mongodb为前端提供接口

## 上手指南
以下指南将帮助你在本地机器上安装和运行该项目，进行开发和测试。关于如何将该项目部署到在线环境，暂时还未写。

## 安装要求
1. 在本地装好mongodb数据服务
2. 基于nodejs版本v10.16.2开发
3. 在admin数据库中创建users名为admin；密码为123456（配置在项目config.js中可以修改）

## 安装步骤
1. git clone https://github.com/Get-wy/interface.git
2. cd koa+mongodb
3. npm install
4. npm run dev

## 接口样式

```
{
    "code": 1,
    "data": {
        "message": "登录成功",
        "data": {
            "_id": "5e66f44184d497fcc3b18594",
            "name": "123",
            "__v": 0
        }
    },
    "msg": "success"
}
```
