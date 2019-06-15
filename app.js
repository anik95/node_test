const express = require('express')

const bodyParser = require('body-parser')

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const pageNotFoundRoute = require('./routes/page_not_found')

const app = express()

app.use(bodyParser.urlencoded({extended: false}))

app.use('/admin', adminRoutes)
app.use(shopRoutes)
app.use(pageNotFoundRoute)

app.listen(3000)