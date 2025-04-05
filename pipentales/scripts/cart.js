let cart = [];


const loadCart = () => {
  const cartContainer = document.getElementById("cart-container");
  cart = JSON.parse(localStorage.getItem("cart")) ?? [];

  cart=[1];
  cartContainer.innerHTML = '';

  if (cart.length === 0) {
    cartContainer.innerHTML = `<h1 class="empty-cart">Your cart is empty<br> Please continue shopping</br></h1>`;
  } else {
    cart.forEach((item, index) => {
      const cartElement = document.createElement('div');
      cartElement.classList.add('add-item');
      cartElement.innerHTML = `
    <p>product: ${item.name}</p>
    <p>Price:$${item.price}</p>
    <p>Quantity:<input type="number" value="${item.quantity}" min="1" data-index="${index}" class="quantity-input"></p>
     <button data-index="${index}" class="remove-btn">Remove</button>
    `;
      cartContainer.appendChild(cartElement);
    })
  }
};

document.addEventListener("DOMContentLoaded", loadCart);