const express = require('express')
const app = express()
const host = 'localhost'
const port = 3000

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile('home.html', { root: 'views' });
})

app.listen(port, (req, res) => {
  console.log(`Server running on port http://${host}:${port}`)
})
