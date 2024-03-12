import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from './Product';

function Products() {
  const [products, setProducts] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState('');
  const [priceFilter, setPriceFilter] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
  
    fetchProducts();
  }, []);

  // filter products based on category
  const filterByCategory = (category) => {
    setCategoryFilter(category);
  };

  // Function to filter products based on price range
  const filterByPrice = (minPrice, maxPrice) => {
    setPriceFilter({ minPrice, maxPrice });
  };

  // Filtered products based on category and price
  const filteredProducts = products.filter((product) => {
    if (categoryFilter && product.category !== categoryFilter) {
      return false;
    }
    if (priceFilter && (product.price < priceFilter.minPrice || product.price > priceFilter.maxPrice)) {
      return false;
    }
    return true;
  });

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Products</h1>
      {/* Filter Controls */}
      <div className="mb-4">
        <label htmlFor="categoryFilter" className="mr-2">Category:</label>
        <select id="categoryFilter" value={categoryFilter} onChange={(e) => filterByCategory(e.target.value)}>
          <option value="">All</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="priceFilter" className="mr-2">Price Range:</label>
        <input type="number" id="minPrice" placeholder="Min Price" value={priceFilter.minPrice || ''} onChange={(e) => setPriceFilter({ ...priceFilter, minPrice: e.target.value })} />
        <input type="number" id="maxPrice" placeholder="Max Price" value={priceFilter.maxPrice || ''} onChange={(e) => setPriceFilter({ ...priceFilter, maxPrice: e.target.value })} />
        <button onClick={() => filterByPrice(priceFilter.minPrice, priceFilter.maxPrice)}>Apply</button>
      </div>
      {/* Product Listing */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Products;
