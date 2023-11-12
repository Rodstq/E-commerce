
if (typeof document !== 'undefined') {

  // script.js

  var buttonPressed = function (e) {
    var currentElement = e.target.parentElement.parentElement.parentElement;
    var id = currentElement.getElementsByClassName("addcarrinho")[0].id;
   

    fetch('/clicked', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: 'teste id',
        imgC: 'teste imgC',
        imgSrc: 'teste imgsrc',
        descricao: 'teste dexc',
        preco: 'teste preco',
        count: 'teste count',
      }),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Server response:', data);
    })
    .catch(error => console.error('Error:', error));
  };

  }

  var buttons = document.getElementsByClassName("addcarrinho");

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", buttonPressed);
  }
