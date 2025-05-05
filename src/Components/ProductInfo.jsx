import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Context } from '../Context/Contexts';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function ProductInfo() {
    let { count, setCount, setAddToCart, addToCart } = useContext(Context);
    let [items, setItems] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3005/data").then((response) => {
            setItems(response.data.menu_items)
        }).catch((error) => {
            console.log("Errors are ", error)
        })
    }, [items])
    let { id } = useParams();
    let item = items.find((item) => item.id === id)
    let navigate = useNavigate();


    //Map on images of items
    let img = item?.images.map((image) => {
        if (image?.target == "home")
            return (image?.s3_link)
    })
    let imgSrc = img?.toString()?.replace(',', '')

    //Map on prices of items
    let prices = item?.menu_item_sizes_prices.map((item) => {
        return (item?.menu_item_size_price?.total_price)
    })
    let price = prices ? prices[0] : 0

    let handleAddCart = () => {
        setAddToCart(item)
        navigate(`/cart`)
    }
    return (
            <div style={{height:"464px"}}  className="col-sm-12">
                <Card className="product d-flex flex-row h-100 mb-5 p-4">
                    <Card.Img className='card-imginfo p-1' style={{ width: "30%", margin: "auto" }} variant="top"
                        alt="img"
                        src={imgSrc}
                    />
                    <Card.Body className="d-flex  flex-column justify-content-between mt-5">
                        <div className='titDesc'>
                            <Card.Title className='text-warning' style={{ fontSize: "70px", textAlign: "left" }}>{item?.en_title}</Card.Title>
                            <Card.Text className='text-white' style={{ fontSize: "20px", textAlign: "left" }}>
                                {item?.en_description}
                            </Card.Text>
                            <div className="d-flex">
                    <Button onClick={handleAddCart} className='me-4 align-self-center' variant="success">
                        <FontAwesomeIcon icon={faBagShopping} /> Add To Cart
                    </Button>
                    <div className="d-flex flex-column">
                        <div className='text-uppercase text-white' style={{ fontWeight: 500 }}>Total</div>
                        <div className='text-secondary'>including VAT</div>
                    </div>
                    <div className='ms-4 text-danger align-self-center' style={{ fontSize: "30px", fontWeight: 500, textAlign: "left" }}>
                        {`EGP ${price}.00`}
                    </div>
                </div>
                        </div>
                    </Card.Body>
                </Card>
            </div>
            )
        }
