// import React from "react";
// import {Link} from 'react-router-dom'
// import {Form, Button, Alert} from 'react-bootstrap'
import { auth } from "../firebase";
import React, { useState } from "react";
import {Link , useNavigate} from 'react-router-dom'
import { useStateValue, useUserAuth } from "../context/userAuth";
import {Form, Button, Alert} from 'react-bootstrap'
import { actionTypes } from "../context/reducer";

function Signin() {

 const [state, dispatch] = useStateValue();

    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [error, seterror] = useState("")
  

    
  
    const signIn = (e)=>{
        e.preventDefault()
        // console.log("first")
        auth.signInWithEmailAndPassword(email,password).then((result)=>{
            // console.log(result.user)
            dispatch({
                type:actionTypes.SET_USER,
                user:result.user
            });
        }).catch((err)=>{
            // seterror(err.message)
            console.log(err.message)
        })
    }
  return (
    <>
      <div className="p-4 box w-50 container">
        <h2 className="mb-3">Login With Correct Crediential</h2>

        {/* {error && <Alert variant="danger">{error}</Alert>} */}

        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={(e)=> setemail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e)=> setpassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button onClick={signIn} variant="primary" type="Submit">
              Log In
            </Button>
          </div>
        </Form>
        <hr />
        <div>
          {/* <GoogleButton
          className="g-btn"
          type="dark"
          onClick={handleGoogleSignIn}
        /> */}
        </div>
      </div>
      <div className="p-4 box mt-3 text-center">
        Don't have an account? <Link to="/signup">Sign up</Link>
      </div>
    </>
  );
}

export default Signin;
