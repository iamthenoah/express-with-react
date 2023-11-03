import express from 'express'

const app = express()

app.get('/api', (_, res) => res.send({ hello: 'world' }))

app.listen(process.env.PORT || 3001)
