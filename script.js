// // Fetch the Produtoff instance from the server
// fetch('http://localhost:8000/getProdutoffInstance')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => console.error('Error fetching Produtoff instance:', error));



var buttonPressed = function (e) {

    var currentElement = e.target.parentElement.parentElement.parentElement;
    var id = currentElement.getElementsByClassName("addcarrinho")[0].id;
    produtoInstacia.addQuantidade(id);
    
}


// adicionando todos os botoes de add ao carrinho na constante buttons
var buttons = document.getElementsByClassName("addcarrinho");

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", buttonPressed);

}
