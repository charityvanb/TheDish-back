const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")
const dishRoutes = require("./routes/dishroutes")
const port = process.env.PORT || 3012
const morgan = require("morgan")

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(morgan(process.env.NODE_ENV !== 'production' ? 'dev' : 'combined'))

app.use('/', dishRoutes)

app.use(notFound)
app.use(errorHandler)


function notFound(req, res, next) {
  res.status(404).send({error: 'Not found!', status: 404, url: req.originalUrl})
}
function errorHandler(err, req, res, next) {
  console.error('ERROR', err)
  const stack =  process.env.NODE_ENV !== 'production' ? err.stack : undefined
  res.status(500).send({error: err.message, stack, url: req.originalUrl})
}

app.listen(port, () => {
    console.log(`running on port: ${port}`)
})