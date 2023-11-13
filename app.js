





// // app.js
// const express = require('express');
// const app = express();
// const exphbs = require('express-handlebars');
// const produto = require('./models/Produto');
// const Produto = require('./models/Produto')

// app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
// app.set('view engine', 'handlebars');

// app.use(express.static('public'));

// console.log(produto);

// app.get('/', async function (req, res) {
//   res.render('home');
// });

// app.post('/clicked', (req, res) => {
//     Produto.create({
//     id : req.body.id,
//     imgC: req.body.imgC,
//     imgSrc: req.body.imgSrc,
//     descricao: req.body.descricao,
//     preco: req.body.preco,
//     count: req.body.count,
//     })
// });

// app.listen(8081, () => {
//   console.log('Server is running on http://localhost:8081');
// });


























// // const Produtoff  = {

// //   calca_branca : {
// //       imgSrc: "./produtos/calca1.jpeg",
// //       descricao: "Calça Cargo Bolso Masculino Preto Hip Hop Casual Jogger Streetwear",
// //       preco: "$150.90",
// //       id: "calca_branca",
// //       imgC: "imgprod",
// //       count: 13,
// //   },

// //   calca_preta : {
// //       imgSrc: "./produtos/calca2.jpeg",
// //       descricao: "Mens fashion casual pocket overalls men's street clothing Korean loose hip-hop",
// //       preco: "$119.90",
// //       id: "calca_preta",
// //       imgC: "imgprod",
// //       count: 0,
// //   },

// //   calca_preta_graph : {
// //       imgSrc: "./produtos/calca3.jpeg",
// //       descricao: "Calças Hip Hop Homens Soltos Calças Corredores Streetwear",
// //       preco: "$119.90",
// //       id: "calca_preta_graph",
// //       imgC: "imgprod",
// //       count: 0,
// //   },

// //   moletom_black_white : {
// //       imgSrc: "./produtos/moletom2.jpeg",
// //       descricao: "Moletom Masculino Com Capuz Manga Comprida",
// //       preco: "$119.90",
// //       id: "moletom_black-white",
// //       imgC: "imgprod",
// //       count: 0,
// //   },

// //   moletom_ziper_black_white : {
// //       imgSrc: "./produtos/moletom3.jpeg",
// //       descricao: "Hong Kong Camisola De Capuz De hip-hop Masculina Com Zíper Preto",
// //       preco: "$119.90",
// //       id: "moletom-ziper-black-white",
// //       imgC: "imgprod",
// //       count: 0,
// //   },

// //   kimono_dragon : {
// //       imgSrc: "./produtos/kimono1.jpeg",
// //       descricao: "Demon Kimono Cosplay Samurai Haori Obi Mulheres Homens",
// //       preco: "$119.90",
// //       id: "kimono-dragon",
// //       imgC: "imgprod",
// //       count: 0,
// //   },  
// // };

// // const addQuantidade = ( str , obj) =>{
// //   switch (str) {
// //       case "calca_branca":
// //           obj.calca_branca.count++;
// //           return obj.calca_branca.count;
// //       case "calca_preta":
// //           obj.calca_preta.count++;
// //           return obj.calca_preta.count;
// //       case "calca_preta_graph":
// //           obj.calca_preta_graph.count++;
// //           return obj.calca_preta_graph.count;
// //       case "moletom_black_white":
// //         obj.moletom_black_white.count++;
// //         return obj.moletom_black_white.count;
// //       case "moletom_ziper_black_white":
// //         obj.moletom_ziper_black_white.count++;
// //         return obj.moletom_ziper_black_white.count;
// //       case "kimono_dragon":
// //         obj.kimono_dragon.count++;
// //         return obj.kimono_dragon.count;
// //       default:
         
// //           return s;
// //   }
// // }

// // const verificarObjeto = ( s) =>{
// //   switch (s) {
// //       case "calca_branca":
// //           return Produtoff.calca_branca;
// //       case "calca_preta":
// //           return Produtoff.calca_preta;
// //       case "calca_preta_graph":
// //           return Produtoff.calca_preta_graph;
// //       case "moletom_black-white":
// //           return Produtoff.moletom_black_white;
// //       case "moletom-ziper-black-white":
// //           return Produtoff.moletom_ziper_black_white;
// //       case "kimono_dragon":
// //           return Produtoff.kimono_dragon;
// //   }
// // }

// // const returnQuant = () => {
// //  var counts =  Produtoff.calca_branca.count + Produtoff.calca_preta.count + Produtoff.calca_preta_graph.count + Produtoff.moletom_black_white.count + Produtoff.moletom_ziper_black_white.count + Produtoff.kimono_dragon.count;
// //  return counts;
// // 
