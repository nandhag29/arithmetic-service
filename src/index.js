const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Arithmetic service - Hello World!');
});

app.get('/add/:n/:m', (req, res) => {
  res.json(Number(req.params.n) + Number(req.params.m));
});

app.listen(port);
