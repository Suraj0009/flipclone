import React from 'react';

function Product({ product }) {
  
  const getImageUrl = () => {
    if (product.images && product.images.length > 0 && product.images[0].url) {
      return product.images[0].url; 
    } else {
      return 'https://media.istockphoto.com/id/1471521270/photo/a-female-hand-and-a-shopping-cart-icon-concept-of-starting-a-sale-online-shopping-increasing.jpg?s=1024x1024&w=is&k=20&c=mPPNMkRW8J3kToKjBoPSPZeyVQlKvjQGB744X2wPVcA='; // Return a dummy image URL if not available
    }
  };

  return (
    <div className="border p-4 rounded-lg shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <img src={getImageUrl()} alt={product.name} className="h-60 w-full object-cover mb-2" />
          <div className="flex gap-2">
            {product.images && product.images.slice(1).map((image, index) => (
              <img key={index} src={image.url} alt={product.name} className="h-20 w-20 object-cover" />
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold">{product.name}</h2>
          <p className="text-gray-600">{product.description}</p>
          <p className="text-lg font-semibold text-primary">${product.price}</p>
          <p className="text-gray-600">Category: {product.category}</p>
          <p className="text-gray-600">Stock: {product.stock}</p>
          <p className="text-gray-600">Rating: {product.rating}</p>
        </div>
      </div>
    </div>
  );
}

export default Product;
