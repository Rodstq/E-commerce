// adicionando todos os botoes de add ao carrinho na constante buttons
const  buttons = document.getElementsByClassName("addcarrinho");
//adicionando elemento html que vai mostrar contagem do carrinho na variavel
const carrinhoCount : HTMLElement = document.getElementById("produtos-adicionados")!;
//atribuindo valor da variavel de sessao count
let countAdicionadosString : string = checkStringOrNull(sessionStorage.getItem("count"));

// adicionando numero ao lado de icone carrinho apenas de houverem produtos adicionados ao carrinho
if (parseInt(countAdicionadosString) != undefined && parseInt(countAdicionadosString) > 0) {
    carrinhoCount.innerHTML = countAdicionadosString;
}

// definindo array com todos elementos
const sent : Array<String> = [];

//definindo variavel para obter valor de produtos atualizados
const sessionSent : string = checkStringOrNull(sessionStorage.getItem("current"));
//definindo variavel preco total
const valorAtual : number = parseFloat(checkStringOrNull(sessionStorage.getItem("valorAtual")));
let valorTotalInt : number = 0;
var countAdicionados;


if( sent.length != 0 || sessionSent !=null){
    sent.push(sessionSent);       
}

// adicionando numero ao lado de icone carrinho apenas de houverem produtos adicionados ao carrinho
if(parseInt(countAdicionadosString)==0){

} else {
    carrinhoCount.innerHTML = countAdicionadosString;
}

if(valorAtual > 0 && valorAtual!= null){
    valorTotalInt = valorAtual;
}

 function checkStringOrNull(s : any) : string{
    if(typeof(s) == null){
        return " ";
    } else {
        return s;
    }
}

const buttonPressed = function (e) {
    let currentElement = e.target.parentElement.parentElement.parentElement;
   
    ++countAdicionados;
    console.log(`Você adicionou: ${countAdicionados} produtos ao carrinho`);

    sent.push(currentElement.outerHTML);
    carrinhoCount.innerHTML = countAdicionados.toString();
    const myStringData : string = JSON.stringify(sent);
    console.log(sent);


    sessionStorage.setItem("string", myStringData);

    const valorTotalString = currentElement.children[2].innerHTML;

    const adicionados  = countAdicionados;
    sessionStorage.setItem("count", adicionados.toString());

    let valorString = valorTotalString.slice(2,valorTotalString.length-1);
    let valorInt = parseFloat(valorString);
    valorTotalInt += valorInt;
    sessionStorage.setItem("valor",valorTotalInt.toString());

}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", buttonPressed);
}