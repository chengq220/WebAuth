const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
const port = 3000

app.get('/', (req, res) => {
  res.send("hello world")
})

app.get('/login', (req, res) => {
  console.log(req.query);
  console.log(req.query.id);
  res.send("hello world")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
