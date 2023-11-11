var Produtoff  = {

    'calca_branca' : {
        imgSrc: "./produtos/calca1.jpeg",
        descricao: "Calça Cargo Bolso Masculino Preto Hip Hop Casual Jogger Streetwear",
        preco: "$150.90",
        id: "calca_branca",
        imgC: "imgprod",
        count: 13,
    },

    'calca_preta' : {
        imgSrc: "./produtos/calca2.jpeg",
        descricao: "Men's fashion casual pocket overalls men's street clothing Korean loose hip-hop",
        preco: "$119.90",
        id: "calca_preta",
        imgC: "imgprod",
        count: 0,
    },

    'calca_preta_graph' : {
        imgSrc: "./produtos/calca3.jpeg",
        descricao: "Calças Hip Hop Homens Soltos Calças Corredores Streetwear",
        preco: "$119.90",
        id: "calca_preta_graph",
        imgC: "imgprod",
        count: 0,
    },

    'moletom_black-white' : {
        imgSrc: "./produtos/moletom2.jpeg",
        descricao: "Moletom Masculino Com Capuz Manga Comprida",
        preco: "$119.90",
        id: "moletom_black-white",
        imgC: "imgprod",
        count: 0,
    },

    'moletom-ziper-black-white' : {
        imgSrc: "./produtos/moletom3.jpeg",
        descricao: "Hong Kong Camisola De Capuz De hip-hop Masculina Com Zíper Preto",
        preco: "$119.90",
        id: "moletom-ziper-black-white",
        imgC: "imgprod",
        count: 0,
    },

    'kimono-dragon' : {
        imgSrc: "./produtos/kimono1.jpeg",
        descricao: "Demon Kimono Cosplay Samurai Haori Obi Mulheres Homens",
        preco: "$119.90",
        id: "kimono-dragon",
        imgC: "imgprod",
        count: 0,
    },  
}

function addQuantidade( s) {
    switch (s) {
        case "calca_branca":
            this.calcaBranca.count++;
            return s;
        case "calca_preta":
            this.calcaPreta.count++;
            return s;
        case "calca_preta_graph":
            this.calcaPretaGraph.count++;
            return s;
        case "moletom_black-white":
            this.moletomBlackWhite.count++;
            return s;
        case "moletom-ziper-black-white":
            this.moletomZipperBlackWhite.count++;
            return s;
        case "kimono-dragon":
            this.kimonoDragon.count++;
            return s;
        default:
            // Handle any default case or unknown values
            return s;
    }
}

 function verificarObjeto( s) {
    switch (s) {
        case "calca_branca":
            return this.calcaBranca;
        case "calca_preta":
            return this.calcaPreta;
        case "calca_preta_graph":
            return this.calcaPretaGraph;
        case "moletom_black-white":
            return this.moletomBlackWhite;
        case "moletom-ziper-black-white":
            return this.moletomZipperBlackWhite;
        case "kimono-dragon":
            return this.kimonoDragon;
    }
}

 function returnQuant(){
   var counts =  this.calcaBranca.count + this.calcaPreta.count + this.calcaPretaGraph.count + this.moletomBlackWhite.count + this.moletomZipperBlackWhite.count + this.kimonoDragon.count;
   return counts;
}

var produto = Produtoff;

module.exports =  produto;
 
