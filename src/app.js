import '../assets/styles/main.scss';
import '../assets/images/hero_banner_img.avif'; // Asegura que Webpack procese esta imagen

const express = require('express');
const { Liquid } = require('liquidjs');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;

// Configurar LiquidJS
const engine = new Liquid({
  root: path.resolve(__dirname, 'templates'),
  extname: '.liquid',
});

// Establecer Liquid como motor de plantillas
app.engine('liquid', engine.express());
app.set('views', './templates');
app.set('view engine', 'liquid');

// Archivos estáticos
app.use('/dist', express.static(path.join(__dirname, '../dist')));

app.use('/data', express.static(path.join(__dirname, '../data')));

app.use('/images', express.static(path.join(__dirname, '../assets/images')));

// Rutas
app.get('/', async (req, res) => {
  try {
    const productsData = fs.readFileSync(path.join(__dirname, 'data/products.json'));
    const settingsData = fs.readFileSync(path.join(__dirname, 'config/settings_data.json'));

    const products = JSON.parse(productsData);
    const settings = JSON.parse(settingsData);

    res.render('index', { products, settings });
  } catch (err) {
    console.error('Error loading data:', err);
    res.status(500).send('Error loading data');
  }
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

document.addEventListener('DOMContentLoaded', () => {
  const showMoreBtn = document.getElementById('showMoreBtn');
  const productItems = document.querySelectorAll('.more-product-item');
  let currentIndex = 0;
  const ITEMS_PER_CLICK = 4;

  const showNextBatch = () => {
    const nextItems = Array.from(productItems).slice(currentIndex, currentIndex + ITEMS_PER_CLICK);
    nextItems.forEach(item => {
      item.classList.remove('hidden');
      item.classList.add('fade-in');
    });
    currentIndex += ITEMS_PER_CLICK;

    if (currentIndex >= productItems.length) {
      showMoreBtn.style.display = 'none'; // Oculta el botón si ya no hay más
    }
  };

  showMoreBtn?.addEventListener('click', () => {
    document.getElementById('more-products').classList.remove('hidden');
    showNextBatch();
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.main-header');
  const scrollToBtn = document.getElementById('scrollToProducts');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  scrollToBtn.addEventListener('click', () => {
    const target = document.getElementById('products');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});


