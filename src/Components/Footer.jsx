import React from 'react';
import '../App.css';
import logo1 from '../images/payment.png';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">About</h3>
          <p>About us information...</p>
          <p>About us information...</p>
          <p>About us information...</p>
          <p>Carriers</p>
          <p>About company</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Group Companies</h3>
          <p>Myntra</p>
          <p>Kartwholesale</p>
          <p>MakeMyTrip</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Consumer Policy</h3>
          <p>Cancellation</p>
          <p>Privacy</p>
          <p>Return</p>
          <p>Terms of Use</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
          <form className="flex">
            <input type="email" placeholder="Your email" className="py-1 px-2 rounded-l-md focus:outline-none focus:ring focus:border-blue-300" />
            <button type="submit" className="bg-blue-500 text-white px-4 py-1 rounded-r-md">Subscribe</button>
          </form>
          <div className="mt-4 flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-white"><Facebook /></a>
            <a href="#" className="text-gray-300 hover:text-white"><Twitter /></a>
            <a href="#" className="text-gray-300 hover:text-white"><Instagram /></a>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <img src={logo1} alt="Payment Logo 1" className="h-10 mr-4" />
      </div>
      <div className="container mx-auto mt-8">
        <p className="text-center"> Subashnagar nagar 122 lane, Dehradun, India</p>
      </div>
    </footer>
  );
};

export default Footer;
