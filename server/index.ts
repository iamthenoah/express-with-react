import { createRoutes } from './src/router'
import express from 'express'
import path from 'path'

const app = express()

app.use(express.static(path.resolve(process.cwd(), '../client/dist')))

createRoutes(app)

app.listen(3000)
