const myStringData : string = sessionStorage.getItem("string")!;

// Deserialize the array
const sentCarrinho : string = JSON.parse(myStringData); 
const adic = sessionStorage.getItem("count")!;

const valor : number = parseFloat(sessionStorage.getItem("valor")!);
const valorAtualCarrinho = sessionStorage.setItem("valorAtual",valor.toString());


var produtoss : HTMLElement | null = document.getElementById("exibidor");
if(produtoss != null){
    for (const elementHTML of sentCarrinho ) {
        produtoss.innerHTML += elementHTML;
    }    
}


const carrinhoCountCarrinho : HTMLElement = document.getElementById("produtos-adicionados")!;
carrinhoCountCarrinho.innerHTML = adic;

// mantendo o valor de sent no sessionstorage
const currentProds : void = sessionStorage.setItem("current", sentCarrinho);

const total = document.getElementById("total")!;
total.innerHTML = valor.toString();

sessionStorage.setItem("count", adic.toString());



