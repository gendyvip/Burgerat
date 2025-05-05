import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import LocalPostOfficeSharpIcon from '@mui/icons-material/LocalPostOfficeSharp';
import PhoneIphoneSharpIcon from '@mui/icons-material/PhoneIphoneSharp';

export default function Footer() {
  return (
             <><div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-6 col-xs-6 col-sm-4 col-md-4">
            <ul className="mob-center list-unstyled">
            <a href="/" className='nav-link d-flex mb-2 flex-row align-items-center'>
            <img 
              alt="logo"
              src="/favicon.ico"
              width="50"
              height="50"
              className="d-inline-block f-logo align-top me-1"
            /> 
             <h2 className='mt-2'>Burgerat</h2></a>
              <li><Link className='nav-link mb-2' to="/home">Home</Link></li>
              <li><Link className='nav-link mb-2' to="/store">Store</Link></li>
              <li><Link className='nav-link mb-2' to="/about">About</Link></li>
              <li><Link className='nav-link mb-2' to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="col-6 col-xs-6  col-sm-5 col-md-4">
            <h2 style={{color:"#ffeee5"}} className='mt-2 align-self-center'>Our Address</h2>
            <address className='align-self-center'>
              12, Chakra St<br />
              Menouf, Menoufia<br />
              Egypt<br />
              <PhoneIphoneSharpIcon/> +201030670603<br />
              <PhoneIphoneSharpIcon/> +201091734337<br />
              <LocalPostOfficeSharpIcon/> <a className='text-decoration-none hover-shadow' href="mailto:gendyisvip@gmail.com">
              gendyisvip@gmail.com</a>
            </address>
          </div>
          <div className="col-12 col-sm-3 col-md-4 align-self-center">
            <div className="text-center">
              <a className="m-1 ic" target="_blank" href="http://www.facebook.com/gendyvip"><FontAwesomeIcon icon={faFacebook}/></a>
              <a className="m-1 ic" target="_blank" href="http://www.instagram.com/gendyvip"><FontAwesomeIcon icon={faInstagram}/></a>
              <a className="m-1 ic" target="_blank" href="http://www.linkedin.com/in/gendyvip"><FontAwesomeIcon icon={faLinkedin}/></a>
              <a className="m-1 ic" target="_blank" href="http://twitter.com/gendyvip"><FontAwesomeIcon icon={faTwitter}/></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-bottom d-flex justify-content-center">
        <div className="col-auto">
          <p><b>Copyright ©</b> 2022 Burgerat, All rights reserved.</p>
        </div>
      </div></>
  )
}
