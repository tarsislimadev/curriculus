const cors = require('cors')
const express = require('express')
const app = express()

app.use(express.static('public'))
app.use(cors({ methods: 'GET,POST', origin: '*' }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/v1', require('./api/v1'))

module.exports = app
