 
const Produtoff = {
    calca_branca: {
      imgSrc: "./produtos/calca1.jpeg",
      descricao: "Calça Cargo Bolso Masculino Preto Hip Hop Casual Jogger Streetwear",
      preco: "$150",
      id: "calca_branca",
      imgC: "imgprod",
      count: 1,
    },
  
    calca_preta: {
      imgSrc: "./produtos/calca2.jpeg",
      descricao: "Mens fashion casual pocket overalls men's street clothing Korean loose hip-hop",
      preco: "$136",
      id: "calca_preta",
      imgC: "imgprod",
      count: 1,
    },
  
    calca_preta_graph: {
      imgSrc: "./produtos/calca3.jpeg",
      descricao: "Calças Hip Hop Homens Soltos Calças Corredores Streetwear",
      preco: "$215",
      id: "calca_preta_graph",
      imgC: "imgprod",
      count: 1,
    },
  
    moletom_black_white: {
      imgSrc: "./produtos/moletom2.jpeg",
      descricao: "Moletom Masculino Com Capuz Manga Comprida",
      preco: "$171",
      id: "moletom_black-white",
      imgC: "imgprod",
      count: 1,
    },
  
    moletom_ziper_black_white: {
      imgSrc: "./produtos/moletom3.jpeg",
      descricao: "Hong Kong Camisola De Capuz De hip-hop Masculina Com Zíper Preto",
      preco: "$125",
      id: "moletom-ziper-black-white",
      imgC: "imgprod",
      count: 1,
    },
  
    kimono_dragon: {
      imgSrc: "./produtos/kimono1.jpeg",
      descricao: "Demon Kimono Cosplay Samurai Haori Obi Mulheres Homens",
      preco: "$119",
      id: "kimono-dragon",
      imgC: "imgprod",
      count: 1,
    },    
    
    
    addQuantidade( s , Produtoff) {
      switch (s) {
          case "calca_branca":
              Produtoff.count++;
              return Produtoff.count;
          case "calca_preta":
              Produtoff.count++;
              return Produtoff.count;
          case "calca_preta_graph":
              Produtoff.count++;
              return Produtoff.count;
          case "moletom_black_white":
              Produtoff.count++;
              return Produtoff.count;
          case "moletom_ziper_black_white":
              Produtoff.count++;
              return Produtoff.count;
          case "kimono_dragon":
              Produtoff.count++;
              return Produtoff.count;
          default:
              return s;
      }
    },
    
     verificarObjeto( s){
      switch (s) {
          case "calca_branca":
              return Produtoff.calca_branca;
          case "calca_preta":
              return Produtoff.calca_preta;
          case "calca_preta_graph":
              return Produtoff.calca_preta_graph;
          case "moletom_black-white":
              return Produtoff.moletom_black_white;
          case "moletom-ziper-black-white":
              return Produtoff.moletom_ziper_black_white;
          case "kimono_dragon":
              return Produtoff.kimono_dragon;
      }
    },
    
      returnQuant () {
     var counts =  Produtoff.calca_branca.count + Produtoff.calca_preta.count + Produtoff.calca_preta_graph.count + Produtoff.moletom_black_white.count + Produtoff.moletom_ziper_black_white.count + Produtoff.kimono_dragon.count;
     return counts;
    },

};

 

// const getProdutoff = () => Produtoff;

// export const updateProdutoff = (id, newValue) => {
//     Produtoff[id] = newValue;
// };

export default Produtoff;
 
