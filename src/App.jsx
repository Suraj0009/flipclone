import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import ImageCarousel from './Components/ImageCrousel';
import Footer from './Components/Footer';
import Content from './Components/Content';
import LoginForm from './Components/LoginForm';
import CategoriesDropdowns from './Components/CategoriesDropdowns';
import './App.css';
import RegisterForm from './Components/RegisterForm';

const App = () => {
  const images = [
    { url: 'https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/ae3a7b82f6d0fbf1.jpg?q=20' },
    { url: 'https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/f0fa8da5ba6bdce3.jpg?q=20' },
    { url: 'https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/ceeda8a31fcee6b8.jpg?q=20' },
    { url: 'https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/ae9a1349fe262071.png?q=20' },
    { url : 'https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/d05c680ac784bef4.png?q=20' }
  ];

  return (
    <Router>
      <Routes>
        <Route path="/Register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/home" element={<HomePage images={images} />} />
      </Routes>
    </Router>
  );
};

const HomePage = ({ images }) => (
  <>
    <Header />
    <CategoriesDropdowns />
    <ImageCarousel images={images} />
    <Content />
    <Footer />
  </>
);

export default App;
