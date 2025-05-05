import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

export default function Login() {
  const [show, setShow] = useState(false);
  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("")


 //Validation By Mohamed Elgendy
  let handleSubmit = (e) => {
    console.log()
    e.preventDefault();
    if ((e.target[0].value) === "") {
      e.target[0].className = "form-control is-invalid"
      setEmailError("Please enter a valid email address");
    }
    if ((e.target[1].value) === "") {
      e.target[1].className = "form-control is-invalid"
      setPasswordError("Password must be at least 8 characters.");
    }
    if (e.target[0].className.includes("is-invalid") || e.target[1].className.includes("is-invalid")) {
    }
    else {
      setTimeout(() => {
        alert(JSON.stringify(`{"Email": '${e.target[0].value}', "Password": '${e.target[1].value}', "Remember": '${e.target[2].checked}'}`))
      }, 600);
    }
  }
  let getEmail = (e) => {
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.target.value)) {
      e.target.className = "form-control is-invalid"
      setEmailError("Invalid email address");
    }
    else {
      e.target.className = "form-control is-valid"
      setEmailError("");
    }
  }

  let getPassword = (e) => {
    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(e.target.value)) {
      e.target.className = "form-control is-invalid"
      setPasswordError(`Password must contain at least one letter and one number.`);

    }
    else {
      e.target.className = "form-control is-valid"
      setPasswordError("");
    }
  }



  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    <>
      <Button variant="warning" onClick={handleShow}>
        Login
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control onChange={getEmail} type="email" placeholder="Enter email" />
              <Form.Text className="text-danger">
                {emailError}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control onChange={getPassword} type="password" placeholder="Password" />
              <Form.Text className="text-danger">
                {passwordError}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
            <div className="d-flex justify-content-center">
              <Button variant="warning pe-5 ps-5" type="submit">
                Login
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  )
}
