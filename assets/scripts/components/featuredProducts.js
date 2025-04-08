export function loadProducts() {
  fetch('/data/products.json')
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error al cargar productos: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log("aaaaaaaaaaaaaaaaa")
      const featuredContainer = document.getElementById('products');
      if (!featuredContainer) return;
      console.log("aaaaaaaaaaaaaaaaa")
      const featured = data.filter(p => p.featured);
      featured.forEach(product => {
        console.log("aaaaaaaaaaaaaaaaa")
        const card = document.createElement('div');
        card.className = 'product-card';
        
        card.innerHTML = `
          <img src="/dist/images/${product.image}" alt="${product.title}" />
          <h3>${product.title}</h3>
          <p>${product.price}</p>
        `;
        featuredContainer.appendChild(card);
      });
    })
    .catch(err => console.error(err));
}
