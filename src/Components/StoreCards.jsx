import React, { useContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { Context } from '../Context/Contexts';


export default function StoreCards({item}) {

    let { key,setKey,addToCart, setAddToCart} = useContext(Context);
    let navigate = useNavigate();
    let [LTZ, setLTZ] = useState(false);
    let [count, setCount] = useState(item.free_items_count);
   


      let handleShow=()=>{
         navigate(`../store/products/${item.id}`)
      }
      //Map on images of items
      let img = item.images.map((image) => {
        if (image.target == "home")
          return (image.s3_link)
      })
      let imgSrc = img.toString().replace(',', '')
      
      //Map on prices of items
      let prices = item.menu_item_sizes_prices.map((item) => {
        return (item.menu_item_size_price.total_price)
      })
      let [price,setPrice] = useState( prices[0]);
       
      let addHandler = () => {
        if (count >= 0) {
          setCount(count+1);
          setLTZ(true);
          setAddToCart(item)
          if(count>=1){
            setPrice(prices[0]+price)
          }
        }
      }
      let removeHandler = () => {
        if (count <= 1) {
          setLTZ(false);
          setCount(count - 1);
        }
        else { setCount(count - 1);
          setPrice(price-prices[0])
        }
      }    
  return (
    <div className="col-md-4 col-lg-3 col-sm-6 mb-3">
    <Card style={{ height: '20rem' }} className="h-100">
      <Card.Img className='p-1' style={{ width: "70%", margin: "auto" }} variant="top"
        alt="img"
        src={imgSrc}
      />
      <Card.Body className="d-flex flex-column justify-content-between">
        <div className='titDesc'>
          <Card.Title style={{ marginTop: '8px', textAlign: "left" }}>{item.en_title}</Card.Title>
          <Card.Text  style={{ textAlign: "left" }}>
              {item.en_description}
          </Card.Text>
        </div>
        <div>
          <Card.Text className='text-danger' style={{ marginTop: '8px', textAlign: "left" }}>
            {`${price.toFixed(2)} EGP`}
          </Card.Text>
          <div className="d-flex justify-content-start mt-3">
            <Button onClick={handleShow} variant="warning" className='me-1'>Details</Button>
            <Button id='addButton' key={item.id} onClick={addHandler} className='ms-1 me-1' variant="success">+</Button>
            {LTZ && <Button onClick={removeHandler} variant="danger" className='ms-1'>-</Button>}
          </div>
        </div>
      </Card.Body>
    </Card>
  </div>
  )
}
