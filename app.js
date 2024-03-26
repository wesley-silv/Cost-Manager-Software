var express = require('express')
var app = express()
var host = 'localhost'
var port = 3000
app.use(express.static('public'))
app.get('/', function (req, res) {
  res.sendFile('home.html', { root: 'views' })
})
app.listen(port, function (req, res) {
  console.log('Server running on port http://'.concat(host, ':').concat(port))
})
