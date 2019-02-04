const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")
const dishRoutes = require("./routes/dishroutes")
const port = process.env.PORT || 3008

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/', dishroutes)

app.listen(port, () => {
    console.log(`running on port: ${port}`)
})