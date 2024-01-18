const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Arithmetic service - Hello World!');
});

app.get('/sum', (req, res) => {
  const num1 = Number(req.query.num1);
  const num2 = Number(req.query.num2);
  const sum = num1 + num2;
  res.send(`${num1} + ${num2} = ${sum}`);
});

app.listen(port);
