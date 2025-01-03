import { createRoutes } from './src/router'
import express from 'express'
import path from 'path'

const app = express()

createRoutes(app)

const client = path.resolve(process.cwd(), '../client/dist')
app.use(express.static(client))
app.get('*', (_, res) => res.sendFile(path.resolve(client, 'index.html')))

app.listen(3000)
