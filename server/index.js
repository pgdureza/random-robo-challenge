const robotGenerator = require('./robotGenerator')

let base = {
  robots: robotGenerator(),
}

const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router(base)
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(jsonServer.bodyParser)

server.post('/robots/:id/extinguish', (req, res) => {
  const id = parseInt(req.params.id, 10)
  const robot = base.robots.find((robot) => robot.id === id)
  robot.statuses = robot.statuses.filter((status) => status !== 'on fire')
  res.json(robot)
})

server.post('/robots/recycle', (req, res) => {
  const ids = req.body.recycleRobots?.map((idString) => parseInt(idString, 10))
  base.robots = base.robots.filter((robot) => !ids.includes(robot.id))
  res.json(base.robots)
})

server.put('/shipments/create', (req, res) => {
  const ids = req.body.ids?.map((idString) => parseInt(idString, 10))
  base.robots = base.robots.filter((robot) => !ids.includes(robot.id))
  res.json(base.robots)
})

server.get('/robots', (req, res) => {
  if (base.robots.length === 0) {
    base.robots = robotGenerator()
  }
  res.json(base.robots)
})

server.use(router)

server.listen(3001, () => {
  console.log('JSON Server is running in port 3001')
})
