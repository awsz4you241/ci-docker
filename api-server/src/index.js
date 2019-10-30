//////////////////////////////////////////////////////////////////
const express = require('express')
const app = express()
const apiServer = require('http').Server(app)
const router = express.Router()
apiServer.listen(3000, () => {
  console.log('%s: api-server起動成功', (new Date).toLocaleString())
})
app.use((req, res, next) => {
  console.log('%s:[%s] %s', (new Date).toLocaleString(), req.method, req.originalUrl)
  next()
})
app.set('json spaces', 2)
app.use('/api', router)
router.get('/tax', (req, res) => {
  const {price,flag} = req.query
  const rate = flag !== undefined ? 0.08 : 0.1
  const tax = Math.trunc(price * rate)
  const included = Number(price) + tax
  res.json({price,tax,included})
})
//////////////////////////////////////////////////////////////////
