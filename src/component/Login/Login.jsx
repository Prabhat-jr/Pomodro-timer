import React from 'react'
import "./Login.css";
import {Link, useNavigate} from "react-router-dom"
import { signInWithEmailAndPassword } from '@firebase/auth';
import { auth } from '../../firebaseConfig';
import { useState } from 'react';



const Login = () =>{
    const [email, setEmail] = useState("") 
    const [password, setPassword] =useState("")
    const navigate=useNavigate()
    const loginHandler=()=>{
signInWithEmailAndPassword(auth,email,password).then((user)=>{
navigate("/timer")
}).catch((error)=>{
    const errorCode = error.code;
    const errorMessage = error.message;
})
    }
    return (
        <div className="homepage">
        <div className="loginpage">
            <div className="emailpage">
            <label>EMAIL</label>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" name="email" className="inputemail" placeholder="Enter the email"/>
            </div>
            <div className="passwordpage">
            <label>PASSWORD</label>
            <input value={email} onchange ={(e)=>setPassword(e.target.value)} type="password" name="password" className="inputemail" placeholder="Enter the password"/>
            </div>
            <div>
            <button onClick ={loginHandler} className="loginbutton" >LOGIN</button>
            </div>
            <p>If don't have account? <Link to={"/signup"}>Sign up</Link></p>
        </div>
        </div>
    )
}
export default Login
