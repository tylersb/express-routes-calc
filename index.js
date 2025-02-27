const express = require('express')
const app = express()

app.get('/add/:x/:y', (req, res) => {
  res.send('The answer is ' + (parseInt(req.params.x) + parseInt(req.params.y)))
})

app.get('/subtract/:x/:y', (req, res) => {
  res.send('The answer is ' + (parseInt(req.params.x) - parseInt(req.params.y)))
})

app.get('/multiply/:x/:y', (req, res) => {
  res.send('The answer is ' + (parseInt(req.params.x) * parseInt(req.params.y)))
})

app.get('/divide/:x/:y', (req, res) => {
  res.send('The answer is ' + (parseInt(req.params.x) / parseInt(req.params.y)))
})

app.listen(8000)
