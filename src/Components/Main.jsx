import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Container from 'react-bootstrap/esm/Container';
import OffCanvasCart from './OffCanvasCart';
import Home from './Home';
import Store from './Store';
import About from './About';
import Contact from './Contact';
import { Route, Routes, Navigate } from 'react-router-dom';
import Cart from './Cart';
import NotFound from './NotFound';
import CartOffCanvas from './CartOffCanvas';
import ProductInfo from './ProductInfo';


export default function Main() {
  return (
    <div className="main">
      <Header />
      <Container className='p-5'>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/store" element={
            <div className="row justify-content-center">
              <Store />
            </div>
          } />
          <Route path="store/products/:id" element={
            <div className="row justify-content-center">
              <ProductInfo />
            </div>
          } />
          <Route path="/about/" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Container>
      <OffCanvasCart />
      <Footer />
    </div>
  )
}
