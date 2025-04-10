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

    window.addEventListener('scroll', () => {
      const header = document.querySelector('.main-header');
      if (window.scrollY > 0) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const scrollBtn = document.getElementById("scrollToProducts");
    const targetSection = document.getElementById("featured-products");
  
    if (scrollBtn && targetSection) {
      scrollBtn.addEventListener("click", function () {
        targetSection.scrollIntoView({ behavior: "smooth" });
      });
    }
  });