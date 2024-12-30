import { Express } from 'express'

export const createRoutes = (app: Express) => {
	app.get('/api', (_, res) => res.send({ hello: 'world' }))
}
