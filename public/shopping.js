const prod = JSON.parse(localStorage.getItem('produto'));

const exibidor = document.getElementById('exibidor');

const totalAdicionadosCarrinhoTexto = document.getElementById('produtos-adicionados');
console.log(prod);


// Get an array of keys
const productKeys = Object.keys(prod);
let totalAdicionados =0;
// Iterate through the keys using a for loop
for (let i = 0; i < productKeys.length; i++) {
  const key = productKeys[i];
  const product = prod[key];
  if(product.count > 0){
    
    // Create a new div element
    const newDiv = document.createElement('div');


// Set some properties for the new div
newDiv.innerHTML = `<div class="exibidor"> 
<img class="imgprod" src="../public/${product.imgSrc}">
<p class="descricao" > ${product.descricao} </p>
<p id="preco"> ${product.preco} </p>
<span>
  
    <button class="botaoQuant"> + </button>
    <input class="quantidade-produto" type="number" value="${product.count}"></input>    
    <button class="botaoQuant"> - </button>
     
</span>
</div>`;

// Append the new div to an existing element with the id "container" (assuming such an element exists in your HTML)
exibidor.appendChild(newDiv);

  console.log(`Product ID: ${product.id}`);
  console.log(`Description: ${product.descricao}`);
  console.log(`Price: ${product.preco}`);
  console.log(`Count: ${product.count}`);
  console.log("---------------");

  totalAdicionados+=product.count;
  console.log(totalAdicionados);
  totalAdicionadosCarrinhoTexto.innerHTML=totalAdicionados;
  localStorage.setItem('produto', JSON.stringify(product));
  }
}


// import { produtoInstacia } from "./produto/todosProdutos.js";



// // import { produtoInstacia } from "/todosProdutos.js";
// // import {addUserAction, store} from './redux/store.js';

// // //seleciona icone carrinho
// // var carrinhoQuant = document.querySelector("#produtos-adicionados");
// // //identificando o display do valor total e atribuindo valor da sessionStorage nele
// // var totalDisplay = document.getElementById("total");

// // var exibidorProds = document.getElementById("exibidor");
// // var botoes = document.getElementsByClassName("botaoQuant");




// // Define the isDuplicated function
// function isDuplicated(arr, element) {
    
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].id === element.id) {
//             return true; // Element is duplicated            
//         }
//     }
//     return false; // Element is not duplicated
// }



// var exibidorProds = document.getElementById("exibidor");
// var countt=0;
// // Loop through the products and create HTML elements for each one
// for (let i = 0; i < produtoInstacia.length; i++) {
//     if (!isDuplicated(produtoInstacia.slice(0, i), produtoInstacia[i])) {
//         var product = produtoInstacia[i];

//         var productDiv = document.createElement("div");
//         productDiv.className = "exibidor";

//         var imgElement = document.createElement("img");
//         imgElement.src = product.imgSrc;
//         productDiv.appendChild(imgElement);
//         imgElement.classList.add(product.imgC);

//         var descricaoElement = document.createElement("p");
//         descricaoElement.className = "descricao";
//         descricaoElement.textContent = product.descricao;
//         productDiv.appendChild(descricaoElement);

//         var precoElement = document.createElement("p");
//         precoElement.id = "preco";
//         precoElement.textContent = product.preco;
//         productDiv.appendChild(precoElement);

//         var buttonElementAdd = document.createElement("button");
//         buttonElementAdd.textContent = "+";
//         buttonElementAdd.className = "botaoQuant";
//         productDiv.appendChild(buttonElementAdd);

//         var textfield = document.createElement("input");
//         textfield.value = 1;
//         textfield.type = "number";
//         textfield.className = "quantidade-produto";
//         productDiv.appendChild(textfield);

       
//         var buttonElementMinus = document.createElement("button");
//         buttonElementMinus.textContent = "-";
//         buttonElementMinus.className = "botaoQuant";
//         productDiv.appendChild(buttonElementMinus);

//         exibidorProds.appendChild(productDiv);

//         var total = parseFloat(sessionStorage.getItem('valor'));
//         totalDisplay.innerHTML = total;

//     }
// }

// for (let i = 0; i < produtoInstacia.length; i++) {
//     if (produtoInstacia[i].id === "calca_branca") {
//         countt++;
//         produtoInstacia[i].count+=countt;
//     }
// }

// // for(let i = 0; i< botoes.length; i++){
// //     botoes[i].addEventListener("click", quantidade);
// // }


// function quantidade(buttons,inputs){
//     var button = buttons.target;
//     var quantidaThisProduto = button.parentElement.querySelector(".quantidade-produto")
//     console.log(button);
//     if(button.innerHTML ==="+"){
//         quantidaThisProduto;
//         console.log(quantidaThisProduto);
//     }
// }
