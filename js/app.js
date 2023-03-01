import products from './data.js';
const productSection = document.getElementById('product-section');

products.forEach(product => {
    const productElement = document.createElement('div');
    productElement.classList.add('product');
    productElement.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>${product.description}</p>
    <span class="price">$${product.price.toFixed(2)}</span>
  `;
    productSection.appendChild(productElement);
});
