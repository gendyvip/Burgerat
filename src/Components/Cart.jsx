import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../Context/Contexts'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  let { setAddToCart, addToCart } = useContext(Context);
  let item = addToCart
  let [show, setShow] = useState(false);
  let [showAll, setShowAll] = useState(true);
  let [LTZ, setLTZ] = useState(true);
  let [count, setCount] = useState(item?.free_items_count + 1);
  let navigate = useNavigate();

  let toHome = () => {
    navigate('/')
  }

  //Map on images of items
  let img = item?.images?.map((image) => {
    if (image?.target == "home")
      return (image?.s3_link)
  })
  let imgSrc = img?.toString().replace(',', '')

  //Map on prices of items
  let prices = item?.menu_item_sizes_prices?.map((item) => {
    return (item?.menu_item_size_price?.total_price)
  })
  let [price, setPrice] = useState(prices ? prices[0] : 0);


  let addHandler = () => {
    if (count >= 0) {
      setCount(count + 1);
      setLTZ(true);
      if (count >= 1) {
        setPrice(prices[0] + price)
      }
    }
  }
  let removeHandler = () => {
    if (count <= 1) {
      setLTZ(false);
      setCount(count - 1);
    }
    if (count == 1) {
      setShowAll(false)
      setShow(true)
    }
    else {
      setCount(count - 1);
      setPrice(price - prices[0])
    }
  }

  return (
    <><h1 className='text-uppercase text-center'>cart {count}</h1>
      {show && <p className='text-center text-dark' style={{height:"392px"}}>There are no items in your cart</p>}
      {showAll &&
        <div className="row justify-content-between">
          <div className="col-md-6 mt-auto mb-auto">
            <div className="d-flex flex-row justify-content-between">
              <img className='card-imginfo w-50' src={imgSrc} alt="img" />
              <div className='ms-2  align-self-center'>
              <h2>{item?.en_title}</h2>
              <p>{item?.en_description}
              </p>
              <h4 className='text-danger'>{`${price}.00 EGP`}</h4>
              <Button id='addButton' key={item?.id} onClick={addHandler} className='ms-1 me-1' variant="success">+</Button>
                    {LTZ && <Button onClick={removeHandler} variant="danger" className='ms-1'>-</Button>}
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <h4>Special Requests</h4>
            <small>No extras are allowed as a special request.</small>
            <textarea className='form-control mt-2' name="extras" id="extras" rows="4"></textarea>
            <hr />
            <h4>Price Details</h4>
            <div className="d-flex flex-row justify-content-between">
              <div>Sub Total:</div>
              <div style={{ fontWeight: 500 }}> {`${(price-(0.14 * price)).toFixed(2)} EGP`}</div>
            </div>
            <div className="d-flex flex-row justify-content-between">
              <p>VAT:</p>
              <div style={{ fontWeight: 500 }}> {`${(0.14 * price).toFixed(2)} EGP`}</div>
            </div>
            <div className="d-flex flex-row justify-content-between">
              <div>
                <div style={{ fontSize: "25px" }}>Total</div>
                <small>Including VAT</small>
              </div>
              <div style={{ fontWeight: 500 }}> {`${(price).toFixed(2)} EGP`}</div>
            </div>
            <hr />
            <div className="d-flex flex-column justify-content-center">
              <button onClick={toHome} type="button" className="btn btn-outline-dark mb-2">+ Add more items</button>
              <Button variant="warning">
                Checkout
              </Button>
            </div>
          </div>
        </div>}
    </>
  )
}



