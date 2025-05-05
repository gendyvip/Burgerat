import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

export default function Carousal() {
  return (
    <Carousel fade className='carousel'>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://b.zmtcdn.com/data/pictures/chains/8/19751258/399a6e0387eb06df3e1ef8835a2412bf.jpg?output-format=webp"
        alt="First slide"
      />
      <Carousel.Caption>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="/assets/imgs/The Elitist-1.jpg"
        alt="Second slide"
        />

      <Carousel.Caption>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://www.umamiburgerparis.com/media/images/gallery/UMAMI-5.jpg?c=7777-1"
        alt="Third slide"
      />

      <Carousel.Caption>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  )
}
