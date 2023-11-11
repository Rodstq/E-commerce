const express = require('express');


const app = express();

app.get('/', function (req,res){
  res.sendFile(__dirname + '/commerceindex.html.js');
})


// const servidor = http.createServer((req, res)=>{
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write('script.js');
//   res.end();
// }).listen(8000);



// const Produtoff = require('./Produtoff.js'); // Adjust the path as needed



// const app = express();
// const port = 8000;

// const produtoInstacia = new Produtoff();

// app.get('/getProdutoffInstance', (req, res) => {
//     res.json(produtoInstacia);
//   });
  

// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });