import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import QueryBuilderSharpIcon from '@mui/icons-material/QueryBuilderSharp';
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';
import Collapse from 'react-bootstrap/Collapse';
import ExpandMoreSharpIcon from '@mui/icons-material/ExpandMoreSharp';
import LocalPostOfficeSharpIcon from '@mui/icons-material/LocalPostOfficeSharp';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import MessageIcon from '@mui/icons-material/Message';
import Iframe from 'react-iframe'
import { Player } from '@lottiefiles/react-lottie-player';


export default function Contact() {
  const [validated, setValidated] = useState(false);
  const [open, setOpen] = useState(false);
  const [showOpen, setShowOpen] = useState(false);
  const [showClose, setShowClose] = useState(false);
  const [showHours, setShowHours] = useState(true);

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form[0].checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
      document.getElementById("acs0").classList.add("bg-danger");
      document.getElementById("acs1").classList.add("bg-danger");
      document.getElementById("pii").classList.add("bg-danger");
      document.getElementById("lpos").classList.add("bg-danger");
      document.getElementById("mi").classList.add("bg-danger");
      document.getElementById("acs0").style.color="#fff";
      document.getElementById("acs1").style.color="#fff";
      document.getElementById("pii").style.color="#fff";
      document.getElementById("lpos").style.color="#fff";
      document.getElementById("mi").style.color="#fff";
    }
    document.getElementById("acs0").classList.add("bg-success");
    document.getElementById("acs1").classList.add("bg-success");
    document.getElementById("pii").classList.add("bg-success");
    document.getElementById("lpos").classList.add("bg-success");
    document.getElementById("mi").classList.add("bg-success");
    document.getElementById("acs0").style.color="#fff";
    document.getElementById("acs1").style.color="#fff";
    document.getElementById("pii").style.color="#fff";
    document.getElementById("lpos").style.color="#fff";
    document.getElementById("mi").style.color="#fff";
    e.preventDefault();
    e.stopPropagation();
    setTimeout(() => {
      alert(JSON.stringify(`{"First Name": '${e.target[0].value}', "Last Name": '${e.target[1].value}', "Email": '${e.target[2].value}', "Phone": '${e.target[3].value}', "Message": '${e.target[4].value}',}`))
    }, 600);
    setValidated(true);
  };
  return (
    <><div className="addressMap row mb-5 d-flex flex-row">
      <div className="col-12 col-lg-6">
        <div className="addmap mb-3">
          <Iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d657.5527280869075!2d48.0509035!3d29.198115!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcfa19821c53d5d%3A0x7c0fca2a1b06534a!2z2KjYsdis2LHYp9iqIEJ1cmdlcmF0!5e1!3m2!1sen!2seg!4v1664845107022!5m2!1sen!2seg" width="600" height="450" style="border:0;" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></Iframe>
        </div>
      </div>
      <div className="col-12 col-lg-6">
        <div className='d-flex ms-2 mb-2'>
          <h2>
            Reach Us
          </h2>
        </div>
        <p><LocationOnSharpIcon className='me-4' />
        <span className='col-12'>Al-Herafia, <span className='hideAddress'>West of Abu Fatira, </span><span className='hideAddress'> Kuwait</span>
        <span className='showAddress'>West of Abu Fatira, </span><span className='showAddress'> Kuwait</span>
        </span>
        </p>
       
        <p><PhoneInTalkIcon className='me-4' /><span>+201030670603</span></p>

        <a
          onClick={() => {
            setOpen(!open)
            setShowHours(!showHours)
            let today = new Date();
            if ((today.getHours() < 23) && (today.getHours() > 11)) {
              setShowOpen(true)
              setShowClose(false)
              setShowOpen(!showOpen)
            }
            else {
              setShowOpen(false)
              setShowClose(true)
              setShowClose(!showClose)
            }
          }}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          <QueryBuilderSharpIcon className='me-4' />{showHours && <span>Hours</span>} {showClose && <span className='text-danger'>Closed Now</span>} {showOpen && <span className='text-success'>Open Now</span>}<ExpandMoreSharpIcon />
        </a>
        <Collapse in={open}>
          <div id="example-collapse-text">
            <div className="d-flex pt-3 ms-5 row">
              <div className='col-5 col-lg-3 col-md-3'>Saturday: </div>
              <div className='col-7 col-md-6'>11PM–12AM</div>
            </div>
            <div className="d-flex pt-3 ms-5 row">
              <div className='col-5 col-lg-3 col-md-3'>Sunday: </div>
              <div className='col-7 col-md-6'>11PM–12AM</div>
            </div>
            <div className="d-flex pt-3 ms-5 row">
              <div className='col-5 col-lg-3 col-md-3'>Monday: </div>
              <div className='col-7 col-md-6'>11PM–12AM</div>
            </div>
            <div className="d-flex pt-3 ms-5 row">
              <div className='col-5 col-lg-3 col-md-3'>Tuesday: </div>
              <div className='col-7 col-md-6'>11PM–12AM</div>
            </div>
            <div className="d-flex pt-3 ms-5 row">
              <div className='col-5 col-lg-3 col-md-3'>Wednesday: </div>
              <div className='col-7 col-md-6'>11PM–12AM</div>
            </div>
            <div className="d-flex pt-3 ms-5 row">
              <div className='col-5 col-lg-3 col-md-3'>Thursday: </div>
              <div className='col-7 col-md-6'>11PM–12AM</div>
            </div>
            <div className="d-flex pt-3 ms-5 row">
              <div className='col-5 col-lg-3 col-md-3'>Friday: </div>
              <div className='col-7 col-md-6'>11PM–12AM</div>
            </div>
          </div>
        </Collapse>
      </div>
    </div>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group className='col-12 col-lg-6' controlId="validationCustom01">
            <div className="row">
              <div className="align-self-center col-md-3 col-lg-4">
                <Form.Label ><AccountCircleSharpIcon className=" bg-darks iconcontact rounded-circle me-2" id="acs0"/> <span className="labelcontact">First name</span></Form.Label>
              </div>
              <div className="col-md-9 col-lg-8">
                <Form.Control
                  required
                  type="text"
                  placeholder="First name" />
                  <Form.Control.Feedback type="invalid">
                  You should enter your first name.
                </Form.Control.Feedback>
              </div>
            </div>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group className='col-12 col-lg-6' controlId="validationCustom02">
            <div className="row">
              <div className="align-self-center col-md-3 col-lg-4">
                <Form.Label ><AccountCircleSharpIcon className=" bg-darks iconcontact rounded-circle me-2" id="acs1"/> <span className="labelcontact">Last name</span></Form.Label>
              </div>
              <div className="col-md-9 col-lg-8">
                <Form.Control
                  required
                  type="text"
                  placeholder="Last name" />
                  <Form.Control.Feedback type="invalid">
                  You should enter your last name.
                </Form.Control.Feedback>
              </div>
            </div>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group className='col-12 col-lg-6' controlId="validationCustom03">
            <div className="row">
              <div className="align-self-center col-md-3 col-lg-4">
                <Form.Label ><LocalPostOfficeSharpIcon className=" bg-darks iconcontact  rounded me-2" id="lpos"/> <span className="labelcontact">Email</span></Form.Label>
              </div>
              <div className="col-md-9 col-lg-8">
                <Form.Control
                  required
                  type="email"
                  placeholder="Email" />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid email address.
                </Form.Control.Feedback>
              </div>
            </div>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group className='col-12 col-lg-6' controlId="validationCustom04">
            <div className="row">
              <div className="align-self-center col-md-3 col-lg-4">
                <Form.Label ><PhoneInTalkIcon className=" bg-darks iconcontact rounded me-2" id="pii"/> <span className="labelcontact">Phone</span></Form.Label>
              </div>
              <div className="col-md-9 col-lg-8">
                <Form.Control
                  required
                  type="tel"
                  placeholder="Phone" />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid phone number.
                </Form.Control.Feedback>
              </div>
            </div>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group className='col-12 col-lg-6' controlId="validationCustom05">
            <div className="row">
              <div className="col-md-3 col-lg-4">
                <Form.Label ><MessageIcon className="bg-darks iconcontact rounded me-2" id="mi"/> <span className="labelcontact">Message</span></Form.Label>
              </div>
              <div className="col-md-9 col-lg-8">
                <Form.Control
                required
                  as="textarea" 
                  rows={4}
                  />
                <Form.Control.Feedback type="invalid">
                  Message body should not be empty.
                </Form.Control.Feedback>
              </div>
            </div>
          </Form.Group>
        </Row>
        <div className='row'> 
          <div className="col-md-3 offset-md-3 col-lg-2 offset-lg-2">
        <Button variant='warning' className='border-dark' type="submit">Submit</Button>
        </div>
        </div>
      </Form>
    </>

  );
}