import React, { useContext, useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Context } from '../Context/Contexts';
import CartOffCanvas from './CartOffCanvas';
import { useNavigate } from 'react-router-dom';

export default function OffCanvasCart() {
  let { count, items, setKey, key,price,addToCart, setAddToCart } = useContext(Context);
  let item=addToCart
  const [showCanvas, setShowCanvas] = useState(false);
  let [emptyCart, setEmptyCart] = useState(false);
  let navigate = useNavigate();


  let toCart = () => {
    navigate('/cart')
    handleClose()
  }

  const handleClose = () => setShowCanvas(false);

  const handleShow = () => {
    setShowCanvas(true);
  }


   let list = items.map((product) => {
    if (product.id == item.id)
    {
      return (
        <CartOffCanvas item={item} key={item.id} />
        )
        ;
    }

  })
  return (
    <>
      <div className="offCanvasBtn col-md-3 mb-5">
        <Button variant='warning' className='offCanvasCart' onClick={handleShow}>
          <ShoppingBasketIcon style={{ color: "1c1c1b" }} />
        </Button>
      </div>
      <Offcanvas show={showCanvas} className onHide={handleClose}>
        <Offcanvas.Header className='canvasBg  d-flex flex-row justify-content-between' closeButton>
          <a href="/cart" className='nav-link'>
            <Offcanvas.Title className='text-uppercase text-xs d-flex'>
              <span>Cart<small className='text-uppercase nav-item ms-2 me-2' style={{ fontSize: "10px" }}>Go To Cart</small></span>
              <span>{count}</span>
            </Offcanvas.Title>
          </a>
        </Offcanvas.Header>
        <Offcanvas.Body className="canvasBg d-flex flex-column justify-content-between">
        {list}
          <p className='text-center text-white'>{emptyCart && "There are no items in your cart"}</p>
          
          <Button onClick={toCart} variant='warning' className='p-3 d-flex justify-content-between'>
            <ShoppingBasketIcon style={{ color: "1c1c1b" }} /><span className='text-uppercase'> Go to Cart</span>
          </Button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}
