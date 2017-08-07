const express = require('express')
const config = require('./config/index')
const favicon = require('serve-favicon')

var app = express()

var port = process.env.PORT || config.build.port

app.use(express.static('./dist'))
// favicon
app.use(favicon(__dirname + '/static/favicon.ico'))

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:' + port + '\n')
})
