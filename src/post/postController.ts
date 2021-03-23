import { Request, Response, NextFunction } from 'express'
import { getPosts } from './postServer'

// 内容列表
export const index = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  // 模拟出错
  if (request.headers.authorization !== 'SECRET') {
    return next(new Error())
  }
  const posts = getPosts()
  response.send(posts)
}