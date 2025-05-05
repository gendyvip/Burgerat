import React, { useContext, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Login from './Login';
import { NavLink,useNavigate } from 'react-router-dom';
import { Context } from '../Context/Contexts';

export default function Header() {
  let { setAddToCart, addToCart } = useContext(Context);
  let item =addToCart;
  let navigate = useNavigate();
 
  let toHome=()=>{
    navigate('/')
  }
  let toCart=()=>{
    navigate('/cart')
  }
  return (
    <><Navbar className='navbg'  expand="lg" >
    <Container>
    <Nav.Link onClick={toCart}><ShoppingCartIcon/> Cart <span className="counterCart"></span></Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse  id="basic-navbar-nav">
          <div className="navitems m-auto flex-row d-flex">
        <Navbar.Brand onClick={toHome}>
            <img
              alt="logo"
              src="/favicon.ico"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            <span className='navBrand'>Burgerat</span> 
          </Navbar.Brand>
            <Nav>
                <NavLink className="nav-link" to="/home">Home</NavLink>
                <NavLink className="nav-link" to="/store">Store</NavLink>
                <NavLink className="nav-link" to="/about">About</NavLink>
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </Nav>
            </div>
            <Login/>
        </Navbar.Collapse>
    </Container>
</Navbar>
</>
  )
}
