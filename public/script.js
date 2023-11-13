
import Produtoff from './Produtoff.js';

const exibidorTudo = document.getElementById('carrinhoDisplay');
let carrin = document.getElementById('carrinhoButton');
const exibidorProd = document.getElementById('carroProdutosexibe');
let homePage = document.getElementById('homePage');
let vitrine = document.getElementById('produtos');
let totalValor = document.querySelector('.totalValor');
let FinalizarCompra = document.querySelector('.finalizarCompra');
let botaoAumenta;
let botaoDiminui;

let contagemProdSession = sessionStorage.getItem('contagemProd');
let contagemProd = 1;
if (contagemProdSession !== undefined && contagemProdSession !== null && contagemProdSession > 0) {
  contagemProd = contagemProdSession;
}
let arr = [];

exibidorTudo.classList.add('notVisible');
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

  exibidorProd.innerHTML = '';
  var count = 0;
  let precoInt = 0;

  for (let i = 0; i < arr.length; i++) {

    let carrinho = document.createElement('div');
    carrinho.classList.add('exibidorCart')
    carrinho.innerHTML += `
     <img class="imgprodCart" src="../public/${arr[i].element.imgSrc}">
     <p class="descricaoCart" > ${arr[i].element.descricao} </p>
     <p class="preco"> ${arr[i].element.preco} </p>
     <span id="botoesQuant">
    <button class="botaoAumenta"> + </button>
    <input class="quantidade-produto" id="quant" type="text" value="1"> 
    <button class="botaoDiminui"> - </button>
     </span>
     `;
    exibidorProd.appendChild(carrinho);
    count++;
    carrin.innerText = count;
    precoInt += parseInt(arr[i].element.preco.substring(1));

  }

  totalValor.innerText = precoInt;


}

var buttons = document.getElementsByClassName("addcarrinho");

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", buttonPressed);
}
//funcao exibir carrinho
var openChart = () => {
  vitrine.classList.add('notVisible');
  exibidorTudo.classList.remove('notVisible');
  exibidorTudo.classList.add('carrinhoDisplayCart');

  //logica para aumentar quantidade la no carrinho
  botaoAumenta = document.getElementsByClassName('botaoAumenta');
  //adicionar evento em todos aumentar
  for (var i = 0; i < botaoAumenta.length; i++) {

    botaoAumenta[i].addEventListener("click", aumenta);
  }

  //logica para diminui quantidade la no carrinho
  botaoDiminui = document.getElementsByClassName('botaoDiminui');
  //adicionar evento em todos diminuir
  for (var i = 0; i < botaoDiminui.length; i++) {

    botaoDiminui[i].addEventListener("click", diminui);
  }


}

//funcao exibir produtos
var openVitrine = () => {
  vitrine.classList.remove("notVisible");
  exibidorTudo.classList.remove('carrinhoDisplayCart');
  exibidorTudo.classList.add('notVisible');
}

carrin.addEventListener('click', openChart);
homePage.addEventListener('click', openVitrine);

//funcao aumenta, altera valor do input e armazena no sessionstorage
function aumenta(s) {
  //aumentar input
  let currentElement = s.target.parentElement;
  let input = currentElement.querySelector('#quant');

  let currentElementAcima = s.target.parentElement.parentElement;

  let value = currentElementAcima.querySelector('.preco').innerText.substring(1);
  input.value = parseInt(++input.value);



  totalValor.innerText = parseInt(totalValor.innerText) + parseInt(value);

  sessionStorage.setItem('contagemProd', input);
}
//funcao diminui, altera valor dos inputs e armazena no sessionstorage
function diminui(r) {
  let currentElementD = r.target.parentElement;
  let inputD = currentElementD.querySelector('#quant');

  let currentElementAcimaD = r.target.parentElement.parentElement;

  let valueD = currentElementAcimaD.querySelector('.preco').innerText.substring(1);
  inputD.innerText = parseInt(--inputD.value);



  totalValor.innerText = parseInt(totalValor.innerText) - parseInt(valueD);

  sessionStorage.setItem('contagemProd', inputD);

}

FinalizarCompra.addEventListener('click', finalizar)


function finalizar() {
  window.alert("PEDIDO FINALIZADO!!!!")
  location.reload(true);
}
