const express = require('express');
const { Liquid } = require('liquidjs');
const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('./webpack.config.js');

const app = express();

// Configurar el motor de plantillas Liquid con rutas correctas
const engine = new Liquid({
  root: [path.join(__dirname, 'templates'), path.join(__dirname, 'sections'), path.join(__dirname, 'snippets')],
  extname: '.liquid',
});

app.engine('liquid', engine.express());
app.set('view engine', 'liquid');

// Integrar Webpack Dev Middleware en modo desarrollo
if (process.env.NODE_ENV !== 'production') {
  const compiler = webpack(webpackConfig);
  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: webpackConfig.output.publicPath,
    })
  );
}

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

app.use('/data', express.static(path.join(__dirname, 'data')));

app.use('/dist', express.static(path.join(__dirname, 'dist')));

app.use('/images', express.static(path.join(__dirname, 'assets/images')));
// Ruta principal
app.get('/', async (req, res) => {
  try {
    // Leer datos de productos desde el archivo JSON
    const products = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'products.json'), 'utf-8'));

    // Renderizar la plantilla 'index' (Liquid buscará index.liquid automáticamente)
    const html = await engine.renderFile('index', { products });
    res.send(html);
  } catch (error) {
    console.error('Error al renderizar la página:', error);
    res.status(500).send('Error interno del servidor');
  }
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en http://localhost:${PORT}`);
});
