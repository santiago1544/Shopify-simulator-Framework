import { createProductCard } from '../utils/dom';

export async function loadProducts() {
  const res = await fetch('/data/products.json');
  const products = await res.json();

  const productsGrid = document.getElementById('productsGrid');
  const showMoreBtn = document.getElementById('showMoreBtn');

  const firstSet = products.slice(0, 4);
  const secondSet = products.slice(4);

  firstSet.forEach(product => {
    productsGrid.appendChild(createProductCard(product));
  });

  const hiddenContainer = document.createElement('div');
  hiddenContainer.classList.add('featured-products__grid', 'hidden');
  hiddenContainer.id = 'moreProducts';

  secondSet.forEach(product => {
    hiddenContainer.appendChild(createProductCard(product));
  });

  productsGrid.parentNode.insertBefore(hiddenContainer, showMoreBtn.parentNode);

  showMoreBtn.addEventListener('click', () => {
    hiddenContainer.classList.remove('hidden');
    hiddenContainer.classList.add('fade-in');
    showMoreBtn.classList.add('fade-out');

    setTimeout(() => {
      showMoreBtn.remove();
    }, 400);
  });
}
