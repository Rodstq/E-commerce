
import Produtoff from './Produtoff.js';

let prod;
const exibidor = document.getElementById('carrinhoDisplay');
let carrin = document.getElementById('produtos-adicionados');

let arr = [];

  var buttonPressed = function (e) {
    let currentElement = e.target.parentElement.parentElement.parentElement;
    let id = currentElement.getElementsByClassName("addcarrinho")[0].id;

 
    if (arr.length === 0) {
      arr.push({ element: Produtoff[id], count: 1 });
    } else {
      let found = false;
    
      for (let i = 0; i < arr.length; i++) {
        if (Produtoff[id] === arr[i].element) {
          arr[i].count++;
          found = true;
          break;
        }
      }
    
      if (!found) {
        arr.push({ element: Produtoff[id], count: 1 });
      }
  }

  exibidor.innerHTML = arr;

  for (let i = 0; i < arr.length; i++) {
        
    let carrinho = document.createElement('div');
    carrinho.classList.add('exibidor');
    carrinho.innerHTML = `<div>
     <img class="imgprod" src="../public/${arr[i].element.imgSrc}">
     <p class="descricao" > ${arr[i].element.descricao} </p>
     <p id="preco"> ${arr[i].element.preco} </p>
     <span>
       
    <button class="botaoQuant"> + </button>
    <input class="quantidade-produto" id="quant" type="number" value="${arr[i].element.count}"></input>    
    <button class="botaoQuant"> - </button>
     </span>
     </div>`;
    
     // Append the new div to an existing element with the id "container" (assuming such an element exists in your HTML)
     exibidor.appendChild(carrinho);
       }
     }

  var buttons = document.getElementsByClassName("addcarrinho");

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", buttonPressed);
  }
  

 


  var openChart = () => {
    exibidor.classList.toggle("notVisible");
  }
   
  carrin.addEventListener('click', openChart );