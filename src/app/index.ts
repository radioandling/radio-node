import express from 'express'
import postRouter from '../post/postRouter'
import { defaultErrorHandler } from './app.middleware'
// 创建应用
const app = express()

//解决JSON
app.use(express.json())

// 配置路由
app.use(postRouter)

// 异常处理
app.use(defaultErrorHandler)
export default app