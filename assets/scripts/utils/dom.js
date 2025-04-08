export function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'card';
  
    card.innerHTML = `
      <img src="assets/${product.image}" alt="${product.title}" width="300" height="300" class="card__image" />
      <h3 class="card__title">${product.title}</h3>
      <p class="card__price">$${product.price}</p>
    `;
  
    return card;
  }
  