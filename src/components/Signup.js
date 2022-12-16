import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {Form, Button, Alert} from 'react-bootstrap'
import db, { auth } from '../firebase'
function Signup() {
    
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [name, setname] = useState("")
    const [error, seterror] = useState("")
    const navigate = useNavigate();
    const signUp = (e)=>{
        e.preventDefault()
        console.log("first")
        
        auth.createUserWithEmailAndPassword(email,password).then((result)=>{
            console.log(result)
        }).catch((err)=>{
            console.log(err.message)
        })
    }
  return (
   
    <>
    <div className="p-4 box container w-50">
      <h2 className="mb-3">Signup</h2>
    
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
            type="name"
            placeholder="Name"
            onChange={(e)=> setname(e.target.value)}
           
          />
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Password"
         
          />
        </Form.Group> */}
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e)=> setpassword(e.target.value)}
          />
        </Form.Group>

        <div className="d-grid gap-2">
          <Button onClick={signUp} variant="primary" type="Submit">
            Sign up
          </Button>
        </div>
      </Form>
    </div>
    <div className="p-4 box mt-3 text-center">
      Already have an account? <Link to="/">Log In</Link>
    </div>
  </>
  )
}

export default Signup