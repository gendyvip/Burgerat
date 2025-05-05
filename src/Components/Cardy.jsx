import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Row } from 'reactstrap';
import Alert from 'react-bootstrap/Alert';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Cardy(props) {
  let { productInfo } = props;
  let [count, setCount] = useState(0);
  let [LTZ, setLTZ] = useState(false);
  let addHandler = () => {
    if (count>=0)
    setLTZ(false);
    setCount(count + 1);
  }
  let removeHandler = () => {
    if (count<=0)
      setLTZ(true);
    else
      setCount(count - 1);
  }
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="col-md-3 col-sm-6 flex-wrap">
      {LTZ && <Alert className='fade' style={{ margin: '0px auto 5px auto' }} key="danger" variant="danger">
        Cart is Already Empty
      </Alert>}
        <Card style={{ margin: '0px auto' }} className=" h-100">
          <Card.Img variant="top" src={productInfo?.imgSrc}/>
          <span style={{marginLeft: '200px', marginTop: '-210px',border:"1px #fff solid",borderRadius:"50%",width:"30px",height:"30px",fontWeight:"700",backgroundColor:"#ffb500" }} >{count}</span>
          <Card.Body>
            <Card.Title style={{marginTop: '160px'}}>{productInfo?.title}</Card.Title>
            <Card.Text>
              {productInfo?.info}
            </Card.Text>
            <Button onClick={handleShow} variant="warning" className='m-2'>Details</Button>
            <Button onClick={addHandler} variant="success">+</Button>
            <Button onClick={removeHandler} variant="danger" className='m-2'>-</Button>
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
            <FontAwesomeIcon icon="fa-solid fa-bag-shopping" />Add To Cart
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

// {productInfo?.price}