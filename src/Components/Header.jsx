import React, { useState } from 'react';
import { UserCircle, ChevronDown, Boxes, Heart, ShoppingCart, Search ,LogOut} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate(); 

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const handleLogout = () => {
    
    navigate('/login');
  };

  const handleSignUp = () => {
    
    navigate('/register');
  };

  return (
    <header className="bg-white text-black py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" alt="Logo" className="h-8" />
        </div>
        <div className="relative lg:flex-grow mx-6">
          <input type="text" placeholder="Search..." className="w-full h-full bg-slate-100 py-2 pr-4 pl-10 rounded-full focus:outline-none focus:ring focus:border-blue-300" />
          <Search className='absolute top-1 left-2 cursor-pointer'/>
        </div>
        <div className="relative flex">
          <div
            className="group flex gap-2 transition duration-300 hover:bg-blue-500 hover:text-white mr-4 py-2 rounded-xl px-2"
            onMouseEnter={toggleDropdown}
            onMouseLeave={closeDropdown} 
          >
            <UserCircle />Login<ChevronDown className={isDropdownOpen ? 'visible' : 'invisible'} />
            {isDropdownOpen && (
              <div className="absolute bg-white shadow-md overflow-hidden mt-8 left-0  w-48 rounded-lg z-10" onMouseLeave={closeDropdown}>
                <a href="#" className="flex gap-2 px-4 py-2 border-b border-slate-400 text-sm text-gray-800 hover:bg-gray-200">New Customer ? <span className='text-blue-500' onClick={handleSignUp}>Sign Up</span></a>
                <a href="#" className="flex gap-2 px-4 py-2 text-sm text-gray-800 hover:bg-gray-200"> <UserCircle/>Profile</a>
                <a href="#" className="flex gap-2 px-4 py-2 text-sm text-gray-800 hover:bg-gray-200"><Boxes/>Orders</a>
                <a href="#" className="flex gap-2 px-4 py-2 text-sm text-gray-800 hover:bg-gray-200"><Heart/>WishList</a>
                <button onClick={handleLogout} className="flex gap-2 px-4 py-2 text-sm text-gray-800 hover:bg-gray-200"><LogOut/>Logout</button>
              </div>
            )}
          </div>
          <a href="#" className="mr-4 flex gap-2 hover:text-gray-600 py-2 px-2"><ShoppingCart/>Cart</a>
    
          <button className="lg:hidden focus:outline-none">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
