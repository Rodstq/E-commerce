import {calca_branca,calca_preta,calca_preta_graph,moletom_black_white, moletom_ziper_black_white,kimono_dragon} from './Produtoff.js';

const exibidorTudo = document.getElementById('carrinhoDisplay');
const carrin = document.getElementById('carrinhoButton');
const exibidorProd = document.getElementById('carroProdutosexibe');
const formularioEntrega = document.getElementById('entregaSec');
const botaoXEntregaSec = document.getElementById('fecharEntregaSec');
const formEntrega = document.getElementById('enderecoCadastro');
const homePage = document.getElementById('homePage');
const vitrine = document.getElementById('produtos');
const totalValor = document.querySelector('.totalValor');
const FinalizarCompra = document.getElementById('carrinhoBotaoFinalizar');
const botaoVoltarVitrine = document.getElementById('carrinhoBotaoVitrine');
const buttons = document.getElementsByClassName("addcarrinho");
const secaoConta = document.getElementById('secaoConta');
const cadastroConta = document.getElementById('CadastroConta');
const LoginConta = document.getElementById('LoginConta');
const cadastrarConta = document.getElementById('CadastrarConta');
const loginForm = document.getElementById('Login');
const conta = document.getElementById('Login-cadastro');
const fecharCompra = document.getElementById('fecharCompra');
const loginBotao = document.getElementById('LoginComConta');
const cadastrarNovaConta = document.getElementById('CadastrarNovaConta');

let quantTotal;
let botaoAumenta;
let botaoDiminui;



function defineProd(string) {
  switch (string) {
      case "calca_branca":
          return calca_branca;
      case "calca_preta":
          return calca_preta;
      case "calca_preta_graph":
          return calca_preta_graph;
      case "moletom_black_white":
          return moletom_black_white;
      case "moletom_ziper_black_white":
          return moletom_ziper_black_white;
      case "kimono_dragon":
        return kimono_dragon;
  }
}



exibidorTudo.style.display = 'none';
formularioEntrega.style.display = 'none';
cadastroConta.style.display = 'none';
conta.style.display = 'none';


let arr = [];
var buttonPressed = function (e) {

  exibidorProd.innerHTML =" ";

  let achou = false;
  let currentElement = e.target.parentElement.parentElement.parentElement;
  let id = currentElement.getElementsByClassName("addcarrinho")[0].id;
  let prod = defineProd(id);

// se o array for 0 adicionar o produto atual
  if (arr.length == 0) {
    arr.push(prod);
    console.log(arr[0].id);
  }
   //verifica e o produto atual ja consta no array, caso conste,adicionar +1 na quantidade
  for (let i = 0; i < arr.length; i++) {
    if (prod.id == arr[i].id) {
      arr[i].quantidade++;
      achou = true;
      break;
    }
  }
  //se achou nao for true, adiciona 1 na quantidade e da um push do produto no array
    if (!achou) {
      prod.quantidade++;
      arr.push(prod);
    }
    carrin.innerText = arr.length;

    for (let i = 0; i < arr.length; i++) {
      let carrinho = document.createElement('div');

      carrinho.classList.add('exibidorCart')
        carrinho.innerHTML += `
         <img class="imgprodCart" id="imgsrc" src="../public/${arr[i].imgSrc}">
         <p class="descricaoCart" > ${arr[i].descricao} </p>
         <p class="preco"> ${arr[i].preco} </p>
         <span id="botoesQuant" class="buttonsPrice">
        <button class="botaoAumenta" id="${arr[i].id}"> + </button>
        <input class="quantidade-produto" id="quant" type="number" min="0" value="${arr[i].quantidade}"> 
        <button class="botaoDiminui" id="${arr[i].id}"> - </button>
         </span>`;
        console.log(arr);
        exibidorProd.appendChild(carrinho);  
      }
  }

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", buttonPressed);
}
//funcao exibir carrinho e selecionar todos botoes + e - para adicionar funcoes aumentar e diminuir
var openCart = () => {
  vitrine.style.display = 'none';
  exibidorTudo.style.display = 'flex';
  formularioEntrega.style.display = 'none';
  cadastroConta.style.display = 'none';
  conta.style.display = 'none';
  exibidorTudo.classList.add('carrinhoDisplayCart');
  quantTotal = document.getElementsByClassName('quantidade-produto');
console.log(quantTotal);
//  seleciona todos os botoes aumentar
  botaoAumenta = document.getElementsByClassName('botaoAumenta');
// adicionar aumenta em todos aumentar
  for (var i = 0; i < botaoAumenta.length; i++) {
    botaoAumenta[i].addEventListener("click", aumenta);
  }

//  seleciona todos os botoes diminuir
botaoDiminui = document.getElementsByClassName('botaoDiminui');
// adicionar diminui em todos diminuir
for (var i = 0; i < botaoDiminui.length; i++) {
  botaoDiminui[i].addEventListener("click", diminui);
}
totalValor.innerText = valorFinal(quantTotal);
}

//funcao aumenta, altera valor do input
function aumenta(s) {
  //selectionar elemento pai
  let currentElement = s.target.parentElement;
  console.log(currentElement);
  //selecionar input
  let input = currentElement.querySelector('#quant');
  //aumentar valor do input
  input.value = parseInt(++input.value);
//seleciona o id do botao + que referencia o objeto a ser incrementado
  let obj = currentElement.querySelector('button').id;
// for para achar produto com mesmo id do botao e ao achar vai incrementar sua quantidade
  for(let i = 0; i < arr.length; i++){
      if(obj === arr[i].id){
        arr[i].quantidade++;
        console.log(arr[i].quantidade);
        totalValor.innerText = valorFinal(quantTotal)
      }
  }
}

//funcao exibir produtos
var openVitrine = () => {
  vitrine.style.display = 'flex';
  exibidorTudo.style.display = 'flex';
  exibidorTudo.classList.remove('carrinhoDisplayCart');
  exibidorTudo.style.display = 'none';
  formularioEntrega.style.display = 'none';
cadastroConta.style.display = 'none';
conta.style.display = 'none';
}
//adiciona funcao abrir carrinho no botao do carrinho
carrin.addEventListener('click', openCart);
// adiciona funcao abrir vitrine no botao ROD COMMERCE
homePage.addEventListener('click', openVitrine);
botaoVoltarVitrine.addEventListener('click', openVitrine);

function diminui(s) {
  //selectionar elemento pai
  let currentElement = s.target.parentElement;
  //selecionar input
  let input = currentElement.querySelector('#quant');
//slsecionar id do botao clicado (para consultar produto)
  let obj = currentElement.querySelector('button').id;
//for para diminuir quantidade do produto
  for(let i = 0; i < arr.length; i++){
      if(obj === arr[i].id){
        if(arr[i].quantidade > 0 ){
            arr[i].quantidade--;
            input.value=arr[i].quantidade;
            totalValor.innerText = valorFinal(quantTotal)
        }
      }
  }
}

function valorFinal(array){
  let valor =0;
  for(let i = 0; i < array.length; i++){
    //selecionando elemento acima 2x do input 
    let parent = array[i].parentElement.parentElement;
    //selecionando valor do preco do elemento
    valor+=parent.querySelector('.preco').innerText.substring(1) * array[i].value;
    console.log(valor);
  }
  return valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
}

FinalizarCompra.addEventListener('click', finalizar)


function finalizar() {
  formularioEntrega.style.display = 'grid';
};

botaoXEntregaSec.addEventListener('click', fecharEntregaForm);

function fecharEntregaForm(){
  formEntrega.reset();
  formularioEntrega.style.display = 'none';
};

LoginConta.addEventListener('click', irParaLogin);

function irParaLogin(){
  cadastroConta.style.display = 'none';
  loginForm.style.display = 'grid';
};

cadastrarConta.addEventListener('click', irParaCadastro);

function irParaCadastro(){
  cadastroConta.style.display = 'grid';
  loginForm.style.display = 'none';
}

const inputConfirmaSenha = document.getElementById('SenhaCadastroConfirma');
const SenhaCadastro = document.getElementById('SenhaCadastro');
const senhaChecker = document.getElementById('senhaChecker');

inputConfirmaSenha.addEventListener('click', confirmaSenha);
SenhaCadastro.addEventListener('click', confirmaSenha);

function confirmaSenha(){
  const senha = SenhaCadastro.value;
  const confirmaSenha = inputConfirmaSenha.value;

  if (senha==""){
    senhaChecker.innerText = 'Senha vazia';
  }else if (senha === confirmaSenha) {
    console.log(senha);
    senhaChecker.innerText = 'Senha confirmada corretamente.';
  } else {
    senhaChecker.innerText = 'As senhas não coincidem. Tente novamente.';
  }
}



loginBotao.addEventListener('click', abrirSecaoLogin);

function abrirSecaoLogin(){
  conta.style.display = 'flex';
  cadastroConta.style.display = 'none';
  loginForm.style.display = 'flex';
}


cadastrarNovaConta.addEventListener('click', abrirSecaoCadastro);

function abrirSecaoCadastro(){
  conta.style.display = 'flex';
  cadastroConta.style.display = 'flex';
  loginForm.style.display = 'none';
}

let fecharSecaoContas = document.getElementById('fecharSecaoContas');

fecharSecaoContas.addEventListener('click', fechaSecaoContas);

function fechaSecaoContas(){
  conta.style.display = 'none';
}
