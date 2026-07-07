"use strict";

// 1. Data Structures (Objects in English)
const products = [
  { id: 1, name: "Laptop", price: 999 },
  { id: 2, name: "Smartphone", price: 499 },
  { id: 3, name: "Headphones", price: 89 }
];

let cart = []; // Array of objects: { id, name, price, quantity }

// 2. DOM Elements
const productListContainer = document.getElementById('product-list');
const cartContainer = document.getElementById('cart-container');

// 3. Render Functions (The "sense" of rendering: updating the visual DOM)
function renderProducts() {
  productListContainer.innerHTML = ''; // Clear previous content

  products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.innerHTML = `
      <h3>${product.name}</h3>
      <p>Price: $${product.price}</p>
      <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>
    `;
    productListContainer.appendChild(productCard);
  });

  // Assign individual event listeners right after rendering
  setupAddToCartListeners();
}

function renderCart() {
  cartContainer.innerHTML = ''; // Clear previous content

  if (cart.length === 0) {
    cartContainer.innerHTML = '<p>The cart is empty</p>';
    return;
  }

  // Create table or list for cart items
  const cartList = document.createElement('ul');
  let cartTotal = 0;

  cart.forEach(item => {
    const itemTotal = item.price * item.quantity;
    cartTotal += itemTotal;

    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <strong>${item.name}</strong> - 
      Qty: ${item.quantity} | 
      Unit Price: $${item.price} | 
      Total: $${itemTotal}
      <button class="remove-from-cart-btn" data-id="${item.id}">Remove</button>
    `;
    cartList.appendChild(listItem);
  });

  // Display elements
  const totalDisplay = document.createElement('p');
  totalDisplay.innerHTML = `<strong>Total Price: $${cartTotal}</strong>`;

  cartContainer.appendChild(cartList);
  cartContainer.appendChild(totalDisplay);

  // Assign individual event listeners right after rendering
  setupRemoveFromCartListeners();
}

// 4. Logic Functions (Add / Remove)
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  const existingItem = cart.find(item => item.id === productId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  renderCart(); // Re-render the cart with updated data
}

function removeFromCart(productId) {
  const existingItem = cart.find(item => item.id === productId);

  if (existingItem) {
    if (existingItem.quantity > 1) {
      existingItem.quantity -= 1;
    } else {
      // Remove item entirely if quantity is 1
      cart = cart.filter(item => item.id !== productId);
    }
  }

  renderCart(); // Re-render the cart with updated data
}

// 5. Individual Event Listeners Assignment
function setupAddToCartListeners() {
  const buttons = document.querySelectorAll('.add-to-cart-btn');
  buttons.forEach(button => {
    button.addEventListener('click', (e) => {
      const productId = parseInt(e.target.getAttribute('data-id'));
      addToCart(productId);
    });
  });
}

function setupRemoveFromCartListeners() {
  const buttons = document.querySelectorAll('.remove-from-cart-btn');
  buttons.forEach(button => {
    button.addEventListener('click', (e) => {
      const productId = parseInt(e.target.getAttribute('data-id'));
      removeFromCart(productId);
    });
  });
}

// 6. Initial Execution
renderProducts();
renderCart();
