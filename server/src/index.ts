import express from 'express'
import path from 'path'

const app = express()

app.use(express.static(path.resolve(process.cwd(), '../client/build')))

app.get('/api', (_, res) => res.send({ hello: 'world' }))

app.listen(3000)
