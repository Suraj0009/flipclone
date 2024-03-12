import React from 'react';
import { Link } from 'react-router-dom';

const Content = () => {
  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-4">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <Link to="/products">
              <img src="https://plus.unsplash.com/premium_photo-1684407617236-c60dc693293a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" alt="Product" className="w-full h-48 object-cover mb-4 rounded-md" />
            </Link>
            <h3 className="text-xl font-semibold mb-2">Mesoroller and cream on a purple background flat lay</h3>
            <p className="text-gray-600 mb-4">Discover luxury skincare with our Mesoroller and Cream set, elegantly displayed against a captivating purple backdrop in a stylish flat lay. Elevate your skincare regimen for radiant, rejuvenated skin.</p>
            <div className="flex items-center justify-between">
              <span className="text-gray-900 font-semibold">$99.99</span>
              <button className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 focus:outline-none">Add to Cart</button>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <Link to="/products">
              <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" alt="Product" className="w-full h-48 object-cover mb-4 rounded-md" />
            </Link>
            <h3 className="text-xl font-semibold mb-2">HeadPhones</h3>
            <p className="text-gray-600 mb-4">Immerse yourself in superior sound quality with our premium headphones, delivering immersive audio experiences for music lovers and audiophiles alike.</p>
            <div className="flex items-center justify-between">
              <span className="text-gray-900 font-semibold">$99.99</span>
              <button className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 focus:outline-none">Add to Cart</button>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <Link to="/products">
              <img src="https://images.unsplash.com/photo-1503602642458-232111445657?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" alt="Product" className="w-full h-48 object-cover mb-4 rounded-md" />
            </Link>
            <h3 className="text-xl font-semibold mb-2">Wodden Stool</h3>
            <p className="text-gray-600 mb-4">Enhance your home décor with our sleek and stylish stool, designed for both comfort and modern aesthetics, perfect for any living space.</p>
            <div className="flex items-center justify-between">
              <span className="text-gray-900 font-semibold">$99.99</span>
              <button className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 focus:outline-none">Add to Cart</button>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md" >
            <Link to="/products">
              <img src="https://plus.unsplash.com/premium_photo-1677541367608-7283ec1b3a2b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" alt="Product" className="w-full h-48 object-cover mb-4 rounded-md" />
            </Link>
            <h3 className="text-xl font-semibold mb-2">Glossy Lipstick</h3>
            <p className="text-gray-600 mb-4">Make a statement with our luxurious lipstick collection, offering vibrant shades and long-lasting wear for bold and confident lips, elevating your makeup look effortlessly.</p>
            <div className="flex items-center justify-between">
              <span className="text-gray-900 font-semibold">$99.99</span>
              <button className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 focus:outline-none">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );  
};

export default Content;
  