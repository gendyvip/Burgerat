import Carousel from 'react-bootstrap/Carousel';
import React from 'react'

export default function About() {
  return (
    <><h1 className='text-dark'>Our Story</h1><p>
      It all started in 2008, with four passionate brothers who shared one big appetite, an obsession with juicy burgers and a demanding palate.</p>
      <p>
      They focused their energy on challenging the conventional idea that food served fast must be “junk-food” and instead worked on refining it to become an elevated culinary adventure where the ingredients are natural and the taste is spectacular.
      </p>
      <p>
      This vision has won over the Egyptian market, and now, Buffalo Burger operates over 44 branches in Egypt, as well as launching across the MENA region.
    </p>
    <Carousel fade className='carousel'>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="assets/imgs/1.jpg"
        alt="First slide"
      />
      <Carousel.Caption>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="assets/imgs/2.jpg"
        alt="Second slide"
        />

      <Carousel.Caption>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="assets/imgs/3.jpg"
        alt="Third slide"
      />

      <Carousel.Caption>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
    </>
    )
}
