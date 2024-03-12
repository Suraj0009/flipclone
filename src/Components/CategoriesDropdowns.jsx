import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const CategoryButton = ({ category, image, onClick, onMouseEnter, onMouseLeave }) => (
  <button 
    className="group flex items-center gap-2 bg-white text-black px-3 py-2 rounded-lg focus:outline-none" 
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <img src={image} alt={category}  className="h-10 w-10 rounded-md mr-2 object-cover" />
    {category}
    <ChevronDown className="text-black group-hover:text-white" />
  </button>
);

const DropdownOptions = ({ options, isOpen, onMouseEnter, onMouseLeave }) => {
  const navigate = useNavigate();

  const handleOptionClick = (option) => {
   
    navigate('/products');
  
  };

  return (
    <div 
      className={isOpen ? "absolute bg-white shadow-md mt-2 py-2 rounded-md w-48 z-10" : "hidden"}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {options.map((option, index) => (
        <button 
          key={index} 
          className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200 focus:outline-none"
          onClick={() => handleOptionClick(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

const CategoriesDropdown = ({ category, image, options }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div 
      className="relative" 
      onMouseEnter={() => setIsDropdownOpen(true)} 
      onMouseLeave={() => setIsDropdownOpen(false)}
    >
      <CategoryButton 
        category={category} 
        image={image} 
        onClick={toggleDropdown} 
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)} 
      />
      <DropdownOptions 
        options={options} 
        isOpen={isDropdownOpen || isHovered} 
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)} 
      />
    </div>
  );
};

const CategoriesDropdowns = () => {
  const categories = [
    { name: "Grocery", image: "https://images.unsplash.com/photo-1588964895597-cfccd6e2dbf9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", options: ["Fruits", "Vegetables", "Dairy","Dryfruits"] },
    { name: "Mobiles", image: "https://images.unsplash.com/photo-1560617544-b4f287789e24?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", options: ["Smartphones", "Accessories", "Tablets"] },
    { name: "Fashion", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1440&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", options: ["Clothing", "Footwear", "Accessories"] },
    { name: "Electronics", image: "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZWxlY3Ryb25pY3N8ZW58MHx8MHx8fDA%3D", options: ["Laptops", "Cameras", "Headphones"] },
    { name: "Home furniture", image: "https://images.unsplash.com/photo-1560617544-b4f287789e24?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", options: ["Smartphones", "Accessories", "Tablets"] },
    { name: "travel", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1440&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", options: ["Clothing", "Footwear", "Accessories"] },

  ];

  return (
    <div className="flex flex-wrap justify-center">
      {categories.map((category, index) => (
        <CategoriesDropdown key={index} category={category.name} image={category.image} options={category.options} />
      ))}
    </div>
  );
};

export default CategoriesDropdowns;
