import React, { useState, useEffect } from 'react'
import MainScreen from '../../MainScreen'
import { Form, Row, Col, Button } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import ErrorMessage from '../../Components/ErrorMessage';
// import axios from 'axios';  
import Loading from '../../Components/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../actions/UserActions';

function RegisterPage({history}) {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [pic, setPic] = useState(
      "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
    );


    const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [picMessage, setPicMessage] = useState(null);

  // const [error, setError] = useState(false);
  // const [loading, setLoading] = useState(false);
const dispatch = useDispatch();
const userRegister = useSelector(state => state.userRegister);
const {loading, error, userInfo}=userRegister;

useEffect(()=>{
  if(userInfo){
    history.push("/mynotes")
  }

},[history,userInfo])

  const submitHandler = async (e) => {
    e.preventDefault();
    if(password!==confirmpassword){
      setMessage('passwords do not match')
    }
    else{
      dispatch(register(name , email, password, pic));
    }
   
  };



    return (
        <MainScreen title="REGISTER">
        <div className="loginContainer">
          {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
          {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
          {loading && <Loading />}
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                value={name}
                placeholder="Enter name"
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
  
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                value={email}
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
  
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
  
            <Form.Group controlId="confirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                value={confirmpassword}
                placeholder="Confirm Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Form.Group>
  
            {/* {picMessage && (
              <ErrorMessage variant="danger">{picMessage}</ErrorMessage>
            )} */}
            <Form.Group controlId="pic">
              <Form.Label>Profile Picture</Form.Label>
              <Form.File
                // onChange={(e) => postDetails(e.target.files[0])}
                id="custom-file"
                type="image/png"
                label="Upload Profile Picture"
                custom
              />
            </Form.Group>
  
            <Button variant="primary" type="submit">
              Register
            </Button>
          </Form>
          <Row className="py-3">
            <Col>
              Have an Account ? <Link to="/login">Login</Link>
            </Col>
          </Row>
        </div>
      </MainScreen>
    )
}

export default RegisterPage
