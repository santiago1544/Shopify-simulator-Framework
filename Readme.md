# Shopify Simulator

Este proyecto es una prueba técnica la cual consiste en un simulador Shopify, el cual al ser una demo reducida del sitio web original, tiene enlaces en el footer que al momento de dar clic, sale como error pero se dejaron para demostrar que dichos enlaces los está consumiento del archivo de settings_data.json, dado a que era uno de los requerimientos de la prueba, del resto las funcionalidades básicas, estilos y diseño responsive están inspirados en el sitio original.

---

## **Project Structure**

```
/simulator
├── /config
│   ├── settings_schema.json      # Defines configurable settings for sections
│   ├── settings_data.json        # Stores dynamic data for rendering sections
├── /data
│   ├── products.json             # Sample product data
│   ├── collections.json          # Sample collection data
├── /public
│   ├── main.js                   # Compiled JavaScript file
├── /sections
│   ├── featured-products.liquid  # Main section rendering product lists
├── /snippets
│   ├── product-card.liquid       # Reusable snippet for individual product cards
├── /templates
│   ├── index.liquid              # Main template file
├── /src
│   ├── styles.css                # Base SASS file
│   ├── app.js                    # Base JavaScript logic
├── /assets                       
│   ├── /images                   # Images for products
│   ├── /scripts                  # JavaScript files
│       ├── /components                
│           ├── featuredProducts.js  # JavaScript featuredProducts file
│           ├── slider.js         # JavaScript slider file
│           ├── top-bar.js        # JavaScript top-bar file
│       ├── /utils  
│           ├── dom.js            # JavaScript dom file
│       ├── main.js               # JavaScript main file
│   ├── /styles                
│       ├── /abstracts
│           ├── _functions.scss   # SCSS functions file
│           ├── _minxins.scss     # SCSS mixins file
│           ├── _variables.scss   # SCSS variables file
│       ├── /base
│           ├── _reset.scss       # SCSS reset file
│           ├── _typography.scss  # SCSS typography file
│       ├── /components
│           ├── _button.scss      # SCSS button file
│           ├── _card.scss        # SCSS card file
│       ├── /layout
│           ├── _featured-products.scss  # SCSS featured-products file
│           ├── _footer.scss      # SCSS footer file
│           ├── _header.scss      # SCSS header file
│           ├── _hero-banner.scss # SCSS hero-banner file
│           ├── _top-bar.scss     # SCSS top-bar file
│       ├── main.scss             # SCSS main file
├── /dist
│   ├── /images                   # Images for products
│   ├── main.css                  # CSS main file
│   ├── main.js                   # JavaScript main file
├── /public
│   ├── main.js                   # JavaScript main file
├── /snippets
│   ├── card.liquid               # Liquid card file
│   ├── featured-products.liquid  # Liquid featured-products file
│   ├── footer.liquid             # Liquid footer file
│   ├── header.liquid             # Liquid header file
│   ├── hero-banner.liquid        # Liquid hero-banner file
│   ├── top-bar.liquid            # Liquid top-bar file
├── /src
│   ├── styles.css                # CSS styles file
│   ├── app.js                    # JavaScript app file
├── /templates
│   ├── index.liquid              # Liquid index file
├── package.json
├── webpack.config.js
├── server.js
```

---
## **Setup Instructions**

### **Install Dependencies**

```bash
npm install
```

### **Build Styles and Scripts**

```bash
npm run build
```

### **Run the Server**

```bash
npm start
```

---

### **Testing the Application**

Visit `http://localhost:3000` in your browser to view the simulator in action.
