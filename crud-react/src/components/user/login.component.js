import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import './login.css';

export default function LoginUser() {

    const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [mobileErr, setMobileErr] = useState("");
  const [validationError,setValidationError] = useState({})

  const LoginUser = async (e) => {
    e.preventDefault();

    if(email.length===0){
        setEmailErr("Please Enter Your Email.");
    }else if(mobile.length===0){
        setEmailErr("");
        setMobileErr("Please Enter Your Mobile.");
    }else if(mobile.length<10 || mobile.length>10){
        setEmailErr("");
        setMobileErr("Please Enter Valid Mobile.");
    }else{
        setMobileErr("");
        
        navigate("/")
    }
    
  }

    return (
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-12 col-md-6">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Login Student</h4>
                  <hr />
                  <div className="form-wrapper">
                  {
                    Object.keys(validationError).length > 0 && (
                      <div className="row">
                        <div className="col-12">
                          <div className="alert alert-danger">
                            <ul className="mb-0">
                              {
                                Object.entries(validationError).map(([key, value])=>(
                                  <li key={key}>{value}</li>   
                                ))
                              }
                            </ul>
                          </div>
                        </div>
                      </div>
                    )
                  }
                    <Form onSubmit={LoginUser}>
                      <Row>
                        <Col>
                          <Form.Group controlId="Email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                              type="email"
                              value={email}
                              onChange={(event) => {
                                setEmail(event.target.value);
                              }}
                            />
                          </Form.Group>
                          <span className="error-message">{emailErr}</span>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <Form.Group controlId="Mobile">
                            <Form.Label>Mobile</Form.Label>
                            <Form.Control
                              type="text"
                              value={mobile}
                              onChange={(event) => {
                                setMobile(event.target.value);
                              }}
                            />
                          </Form.Group>
                          <span className="error-message">{mobileErr}</span>
                        </Col>
                      </Row>
                      
                      <Button
                        variant="primary"
                        className="mt-2"
                        size="lg"
                        block="block"
                        type="submit"
                      >
                        Login
                      </Button>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

}
