// app.js
const express = require('express');
const app = express();
const produto = require('./public/Produtoff');

console.log(produto);

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/html/ecommerceindex.html');
});

app.get('/prood', function (req, res) {
  res.send(produto);
});

app.get('/public/html/carrinho.html', function (req, res) {
  res.sendFile(__dirname + '/public/html/carrinho.html');
});

app.listen(8081, function () {
  console.log('Server is running on http://localhost:8081');
});
