document.addEventListener("DOMContentLoaded", loadCart);

// Function to load the cart from local storage and update the UI
function loadCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const shoppingList = document.getElementById("shopping-list");
  shoppingList.innerHTML = ""; // Clear the current list

  cart.forEach((product, index) => {
    const newRow = document.createElement("tr");

    newRow.innerHTML = `
      <td class="product-sec">
        <img class="Product-img" src="${product.image}" alt="${product.name}" />${product.name}
      </td>
      <td class="price-tag" >${product.price}</td>
      <td class="cancel-sec" >${product.quantity} <button class="cancel-btn" data-index="${index}">X</button></td>
    `;

    shoppingList.appendChild(newRow);

    // Add event listener to the cancel button
    newRow
      .querySelector(".cancel-btn")
      .addEventListener("click", removeFromCart);
  });

  updateSubtotal();
}

// Function to remove an item from the cart
function removeFromCart(event) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const productIndex = event.target.getAttribute("data-index");

  cart.splice(productIndex, 1);
  localStorage.setItem("cart", JSON.stringify(cart));

  // Remove the parent <tr> element
  event.target.closest("tr").remove();

  updateSubtotal();
}

// document.addEventListener("DOMContentLoaded", function () {
//   // Function to calculate and display the total price
//   function calculateTotalPrice() {
//     // Get all elements with id starting with 'price-tag-'
//     const priceTags = document.querySelectorAll('[id^="price-tag-"]');
//     let total = 0;

//     // Loop through each price tag and add the price to the total
//     priceTags.forEach((priceTag) => {
//       // Remove the '$' and convert the price to a number
//       const price = parseFloat(priceTag.textContent.replace("$", ""));
//       // Add the price to the total
//       total += price;
//     });

//     // Get the total price element
//     const totalPriceElement = document.getElementById("total-price");
//     // Update the total price element with the calculated total
//     totalPriceElement.textContent = `$${total.toFixed(2)}`;
//   }

//   // Call the function to calculate and display the total price
//   calculateTotalPrice();
// });

function calculateTotalPrice() {
    // Get all price elements from the shopping list
    const priceTags = document.querySelectorAll('#shopping-list .price-tag');

    // Calculate the total price
    let totalPrice = 0;
    priceTags.forEach(priceTag => {
      const price = parseFloat(priceTag.textContent);
      if (!isNaN(price)) {
        totalPrice += price;
      }
    });

    // Update the total price element
    const totalPriceElement = document.getElementById('total-price');
    totalPriceElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
  }

  // Call the function to calculate total price
  calculateTotalPrice();

