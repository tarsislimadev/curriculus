const fs = require('fs')
const path = require('path')
const pdf = require('html-pdf')
const package = require('./package.json')
const express = require('express')
const router = express.Router()
const { API_URL } = process.env
const public_path = path.resolve('.', 'public')
let counter = 0

const makeName = () => path.resolve(public_path, ['_', Date.now(), '+', ++counter, '.pdf'].join(''))

const makePDF = (body) => new Promise((resolve, reject) =>
  pdf.create(fs.readFileSync('./pdf.html', 'utf8'))
    .toFile(makeName(), (err, result) => err ? reject(err) : resolve(path.basename(result.filename)))
)

router.get('/', (_, res) => res.end(`API: ${package.name}; VERSION: ${package.version}; DATETIME: ${Date.now()}`))

router.use('/file', express.static(public_path))

router.post('/pdf', ({ body }, res) =>
  makePDF(body)
    .then((name) => res.json({ status: 'ok', url: [API_URL, '/file/', name].join('') }))
    .catch((error) => res.status(400).json({ status: 'error', error }))
)

module.exports = router
