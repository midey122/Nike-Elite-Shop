function incrementQuantity() {
  const quantityInput = document.getElementById("quantity");
  quantityInput.value = parseInt(quantityInput.value) + 1;
}

function decrementQuantity() {
  const quantityInput = document.getElementById("quantity");
  if (quantityInput.value > 1) {
    quantityInput.value = parseInt(quantityInput.value) - 1;
  }
}

function addToCart() {
  const productImageSrc = document.querySelector(".product-hero img").src;
  const productName = document.querySelector(".hero-content h1").textContent;
  const productPrice = document.querySelector(".price span").textContent;
  const productQuantity = document.getElementById("quantity").value;

  const product = {
    image: productImageSrc,
    name: productName,
    price: productPrice,
    quantity: productQuantity,
  };

  let cart = localStorage.getItem("cart");
  if (cart) {
    cart = JSON.parse(cart);
  } else {
    cart = [];
  }

  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));


  // Trigger an event to update the shopping cart page if it's open
  window.dispatchEvent(new Event("cartUpdated"));
}
