import express from 'express'
import * as postController from './postController'
import { requestUrl } from '../app/app.middleware'

const router = express.Router()

// 路由列表
router.get('/posts', requestUrl, postController.index)

// 导出router
export default router