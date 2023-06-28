//import express module
const express = require('express')
const {products} = require('./data')

//call express to be used 
const app = express();

// Middleware
app.use(express.static('./public'));

// Routes
// Add app.get and app.post statements here

app.get('/api/v1/test', (req, res) => {
    res.json({ message: 'It worked!' });
  });

  // API route - Get all products
app.get('/api/v1/products', (req, res) => {
    res.json(products);
  });
  

  // API route - Get product by ID
app.get('/api/v1/products/:productID', (req, res) => {
    const { productID } = req.params;
    const idToFind = parseInt(productID);
    const product = products.find((p) => p.id === idToFind);
    
    if (!product) {
      res.status(404).json({ message: 'That product was not found.' });
    } else {
      res.json(product);
    }
  });
  
  // API route - Search and limit products
  app.get('/api/v1/query', (req, res) => {
    const { search, limit } = req.query;
  
    let filteredProducts = [...products];
  
    if (search) {
      filteredProducts = filteredProducts.filter((product) =>
        product.name.toLowerCase().startsWith(search.toLowerCase())
      );
    }
  
    if (limit) {
      const limitValue = Number(limit);
      filteredProducts = filteredProducts.slice(0, limitValue);
    }
  
    res.json(filteredProducts);
  });
  
  app.use((req, res) => {
    res.status(404).send('Not found');
  });
  
  app.listen(3000, () => {
    console.log('Server is listening on port 3000!');
  });

