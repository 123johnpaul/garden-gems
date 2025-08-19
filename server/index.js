const express = require('express')
const cors = require('cors')

const routes=require('./routes/routes')

const app = express()

app.use(cors())

app.use('/garden-gems',routes)

app.listen(5000)