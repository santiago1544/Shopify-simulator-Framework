import { loadProducts } from './components/featuredProducts';
import '../styles/main.scss';


document.addEventListener("DOMContentLoaded", () => {
    loadProducts();
    const showMoreBtn = document.getElementById("showMoreBtn");
    const moreProducts = document.getElementById("more-products");
  
    showMoreBtn?.addEventListener("click", () => {
      moreProducts.classList.remove("hidden");
      showMoreBtn.style.display = "none";
    });
  });
  