import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './modules/Home';
import { Routes, Route } from 'react-router-dom';
import Product from './modules/Product';
import Products from './modules/Products';
import Product2 from './components/Product2';
import Cart from './modules/Cart';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products/:id" element={<Product/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/categories/electronics" element={<Product2 name="electronics"/>}/>
        <Route path="/categories/men's clothing" element={<Product2 name="men's clothing"/>}/>
        <Route path="/categories/women's clothing" element={<Product2 name="women's clothing"/>}/>
        <Route path="/categories/jewelery" element={<Product2 name="jewelery"/>}/>
        <Route path="cart" element={<Cart/>} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
