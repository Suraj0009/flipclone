
import React from 'react';
import Header from './Components/Header';
import ImageCarousel from './Components/ImageCrousel';
import Footer from './Components/Footer';
import Content from './Components/Content';
import './App.css';
import { Component, ImageOff, Import } from 'lucide-react';

import CategoriesDropdowns from './Components/CategoriesDropdowns';

const App = () => {
  const images = [
    { url: 'https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/ae3a7b82f6d0fbf1.jpg?q=20' },
    { url: 'https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/f0fa8da5ba6bdce3.jpg?q=20' },
    { url: 'https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/ceeda8a31fcee6b8.jpg?q=20' },
    { url: 'https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/ae9a1349fe262071.png?q=20' },
    {url : 'https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/d05c680ac784bef4.png?q=20'}
  ];

  return (
    <div>
      <Header />
      <CategoriesDropdowns></CategoriesDropdowns>
      <ImageCarousel images={images} />
      <Content/>
      <Footer />
    </div>
  );
};

export default App;
