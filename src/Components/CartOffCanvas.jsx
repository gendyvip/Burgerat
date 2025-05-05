import React, { useContext, useState } from 'react'
import { Context } from '../Context/Contexts'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function CartOffCanvas() {
  let { setAddToCart, addToCart } = useContext(Context);
  let item =addToCart;
  let [LTZ, setLTZ] = useState(true);
  let [count, setCount] = useState(item?.free_items_count + 1);
  let [showCard, setShowCard] = useState(true);


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
      setPrice(prices[0]+price)
      setLTZ(true);
    }
  }
  let removeHandler = () => {
    if (count <= 1) {
      setCount(count - 1);
      setPrice(price-prices[0])
    }
    if (count == 1) {
      setShowCard(false);
    }
    else { 
      setCount(count - 1);
      setPrice(price-prices[0])
    }
  } 
return (
  <div className="mb-3">
{showCard &&  <Card className="h-100 d-flex flex-row justify-content-between" >
    <Card.Img className='p-1' style={{ width: "30%"}} variant="top"
      alt="img"
      src={imgSrc}
    />
    <Card.Body className="d-flex flex-column justify-content-between">
      <div className='titDesc'>
        <Card.Title style={{fontSize:"17px",textAlign: "left" }}>{item.en_title}</Card.Title>
      </div>
      <div className='d-flex flex-row justify-content-between mt-3'>
      <div className='text-danger align-self-center'>
        <Card.Text style={{ fontSize:"15px",fontWeight:"500",textAlign: "left" }}>
          {`${price.toFixed(2)} EGP`}
        </Card.Text>
        </div>
        <div className="d-flex  align-self-center justify-content-start">
          <Button id='addButton' key={item.id} onClick={addHandler} className='ms-1 me-1' variant="success">+</Button>
          {LTZ && <Button onClick={removeHandler} variant="danger" className='ms-1'>-</Button>}
        </div>
      </div>
    </Card.Body>
  </Card>}
</div>
)
}
