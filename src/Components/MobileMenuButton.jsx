import React, { useState } from 'react';

const MobileMenuButton = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <button className="lg:hidden focus:outline-none" onClick={toggleMenu}>
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      {isMenuOpen && (
        <div className="bg-white absolute top-0 left-0 right-0 mt-12 py-2 px-4 border shadow-md rounded-md">
          <p className="text-gray-800">Become a seller</p>
        </div>
      )}
    </>
  );
};

export default MobileMenuButton;
