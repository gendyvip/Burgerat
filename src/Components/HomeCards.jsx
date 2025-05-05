import React, { useContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row } from 'reactstrap';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { Context } from '../Context/Contexts';

export default function HomeCards({ productInfo }) {  
let {count,setCount} = useContext(Context);
let [LTZ, setLTZ] = useState(false);
let addHandler = () => {
    if (count>=0)
    {
    setCount(count + 1);
    setLTZ(true);}
  }
  let removeHandler = () => {
    if (count<=1)
    {  setLTZ(false);
      setCount(count - 1);
    }
    else
     { setCount(count - 1);}
  }

 
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="col-md-3">
        <Card style={{width:"16rem", margin: '0px auto' }} className="card h-100">
          <Card.Img variant="top" src={productInfo?.imgSrc}/>
          {/* <span style={{marginLeft: '200px', marginTop: '-210px',border:"1px #fff solid",borderRadius:"50%",width:"30px",height:"30px",fontWeight:"700",backgroundColor:"#ffb500"}} >{count}</span> */}
          <Card.Body>
            <Card.Title style={{marginTop: '8px',textAlign:"left"}}>{productInfo?.title}</Card.Title>
            <Card.Text style={{textAlign:"left"}}>
              {productInfo?.info}
            </Card.Text>
            <Card.Text className='text-danger' style={{textAlign:"left"}}>
              {productInfo?.price}
            </Card.Text>
            <div className="d-flex justify-content-start">
            <Button onClick={handleShow} variant="warning" className='me-1'>Details</Button>
            <Button id='addButton' onClick={addHandler}  className='ms-1 me-1' variant="success">+</Button>
            {LTZ && <Button onClick={removeHandler} variant="danger" className='ms-1'>-</Button> }
            </div>
          </Card.Body>
        </Card>
      </div>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add Item Choices</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <div className="h4 col-md-5">{productInfo?.title}</div>
            <div className='col-md-4 offset-md-3 align-self-center'><b>Price </b>{productInfo?.price}</div>
          </Row>
          {productInfo?.info}</Modal.Body>
        <Modal.Footer>
          <Button className='m-auto' variant="success" onClick={handleClose}>
            <FontAwesomeIcon icon={faBagShopping} /> Add To Cart
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

// {productInfo?.price}