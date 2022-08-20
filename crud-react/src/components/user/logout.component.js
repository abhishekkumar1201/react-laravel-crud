import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import './login.css';

export default function LogoutUser() {

    const navigate = useNavigate();

    const LogoutUser = async (e) => {
        e.preventDefault();

    Swal.fire({
        icon:"success",
        text:data.message
    })
    navigate("/login")

    }

    return(
        <div>
        </div>
    );

}
