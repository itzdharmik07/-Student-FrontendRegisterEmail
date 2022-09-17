import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Form, Card, Button } from "react-bootstrap";
// import { Navigate, useParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

export default function User() {

   
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  function textChanged(event){
    if(event.target.name === "name"){
        setName(event.target.value)
    }else if(event.target.name === "email"){
        setEmail(event.target.value)
    }else if(event.target.name === "password"){
        setPassword(event.target.value)
    }else if(event.target.name === "confirmPassword"){
        setConfirmPassword(event.target.value)
    }
  }

  let user = {
    
    name:name,
    email:email,
    password:password,
    confirmPassword:confirmPassword,
  }
  function registerStudent()
  {
    axios.post("http://localhost:8080/register",user)
    .then(response => {alert(response.data)})
    .catch(error => alert(error))
  }
  return (
    <Container>
    <Card>
      <Form onSubmit={registerStudent}>
        <Card.Header>
          <strong>Registration Form</strong>
        </Card.Header>
        <Card.Body>
          
          
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              name="name"
              value={name}
              type="text"
              placeholder="Enter name"
              onChange={textChanged}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              name="email"
              value={email}
              type="email"
            placeholder="Enter email"
              onChange={textChanged}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              value={password}
              type="password"
            placeholder="Enter password"
              onChange={textChanged}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              name="confirmPassword"
              value={confirmPassword}
              type="password"
            placeholder="Enter password"
              onChange={textChanged}
            />
          </Form.Group>
        </Card.Body>
        <Card.Footer>
          <Button variant="primary" type="submit">
           Register
          </Button>
        </Card.Footer>
      </Form>
    </Card>
  </Container>
  )
}
