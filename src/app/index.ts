import express from 'express'

// 创建应用
const app = express()

//解决JSON
app.use(express.json())

export default app