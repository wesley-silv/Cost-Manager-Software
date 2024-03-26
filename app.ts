const express = require('express');
const bodyParser = require('body-parser');

const app = express()
const host = 'localhost'
const port = 3000

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.sendFile('home.html', { root: 'views' });
})

app.post('/insert-dates', (req, res) => {
  const costsFixed = req.body.costs_fixed;
  const costsNotFixed = req.body.costs_not_fixed;

  res.send(`Dados recebidos: Costs Fixed = ${costsFixed}, Costs Not Fixed = ${costsNotFixed}`);

})
app.listen(port, (req, res) => {
  console.log(`Server running on port http://${host}:${port}`)
})
