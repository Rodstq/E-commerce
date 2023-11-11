if (typeof document !== 'undefined') {
    var buttonPressed = function (e) {
      var currentElement = e.target.parentElement.parentElement.parentElement;
      var id = currentElement.getElementsByClassName("addcarrinho")[0].id;
      console.log(id);
     // Send a GET request to '/prood'
    // Send a GET request to '/prood'
    fetch('/prood')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(produtoData => {
        // Access the properties of the selected product using its ID
        const selectedProduct = produtoData[id];
        if (selectedProduct) {
          selectedProduct.count++;
          console.log(selectedProduct.count);
          // You can use the properties as needed
        } else {
          console.error(`Product with id '${id}' not found in the response.`);
        }
      })
      .catch(error => console.error('Error fetching produto:', error));
  };

  // Adding click event listeners to the buttons
  var buttons = document.getElementsByClassName("addcarrinho");

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", buttonPressed);
  }
}

