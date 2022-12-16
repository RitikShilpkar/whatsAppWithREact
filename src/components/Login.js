import React from 'react'
import { actionTypes } from '../context/reducer';
import { useStateValue } from '../context/userAuth';
import { auth, provider } from '../firebase'

import '../Login.css'

function Login() {
    const [state, dispatch] = useStateValue();
    const signin = ()=>{
        auth.signInWithPopup(provider).then((result)=>{
            dispatch({
                type:actionTypes.SET_USER,
                user:result.user
            });
        }).catch((err)=>{
            console.log(err.message)
        })
    }
  return (
    <div className='login'>
        <div className="login_container">
            <div className="login_text">
                <h1>Signin to whatspp</h1>
            </div>
            <button onClick={signin} >Sign in</button>
        </div>
    </div>
  )
}

export default Login