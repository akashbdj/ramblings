import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import postsRouter from './routes/posts.js'
const app = express()
const port = process.env.PORT || 3000
import { connectDB } from './config/db.js'

app.use(cors())
app.use(bodyParser.json())
app.use('/posts', postsRouter)

connectDB()
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
