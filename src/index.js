const express = require('express');
const cors = require('cors');
const { add } = require('./arithmetica');
const app = express();
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Arithmetic service - Hello World!');
});

app.get('/add/:n/:m', (req, res) => {
  let n = Number(req.params.n);
  let m = Number(req.params.m);
  let sum = add(n, m);
  res.json(sum);
});

app.get('/subtract/:n/:m', (req, res) => {
  res.json(Number(req.params.n) - Number(req.params.m));
});

app.get('/multiply/:n/:m', (req, res) => {
  res.json(Number(req.params.n) * Number(req.params.m));
});

app.get('/divide/:n/:m', (req, res) => {
  res.json(Number(req.params.n) / Number(req.params.m));
});

app.listen(port);
