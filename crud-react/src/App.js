import * as React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";

import { BrowserRouter as Router , Routes, Route, Link } from "react-router-dom";
import  { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

import EditProduct from "./components/product/edit.component";
import ProductList from "./components/product/list.component";
import CreateProduct from "./components/product/create.component";

import EditUser from "./components/user/edit.component";
import UserList from "./components/user/list.component";
import CreateUser from "./components/user/create.component";

import RegisterUser from "./components/user/register.component";
import LoginUser from "./components/user/login.component";
import Test from "./components/Test";
import UserTable from "./components/UserTable";
import OffCanvas from "./components/OffCanvas";
import SpinnerButton from "./components/SpinnerButton";

function App() {

  const textFromStorage = localStorage.getItem('token');

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (<Router>
    <Navbar bg="primary">
      <Container>
        <Link to={"/"} className="navbar-brand text-white">
          Basic Crud React-Laravel App
        </Link>
        <Link to={"/user"} className="navbar-brand text-white">
          Employee
        </Link>
        <Link to={"/"} className="navbar-brand text-white">
        Product
        </Link>
        <Link to={"/register"} className="navbar-brand text-white">
        Register
        </Link>
        <Link to={"/login"} className="navbar-brand text-white">
        Login
        </Link>
        <Link to={"/login"} className="navbar-brand text-white">
        Logout
        </Link>

        <Button variant="primary" onClick={handleShow} className="me-2">
        Side-Menu
        </Button>
        <Offcanvas show={show} onHide={handleClose} side-menu>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
            <br/>

            <img src={`https://picsum.photos/350/400`} alt="user image" />

            <br/>

            <SpinnerButton/>

          </Offcanvas.Body>
        </Offcanvas>
        
      </Container>
    </Navbar>

    <Container className="mt-5">
      <Row>
        <Col md={12}>
          <Routes>
            <Route path="/product/create" element={<CreateProduct />} />
            <Route path="/product/edit/:id" element={<EditProduct />} />
            <Route exact path='/' element={<ProductList />} />

            <Route path="/user/create" element={<CreateUser />} />
            <Route path="/user/edit/:id" element={<EditUser />} />
            <Route exact path='/user' element={<UserList />} />

            <Route exact path='/register' element={<RegisterUser />} />
            <Route exact path='/login' element={<LoginUser />} />
            <Route exact path='/test' element={<Test />} />
            <Route exact path='/usertable' element={<UserTable />} />
            <Route exact path='/offcanvas' element={<OffCanvas />} />

          </Routes>
        </Col>
      </Row>
    </Container>
  </Router>);
}

export default App;