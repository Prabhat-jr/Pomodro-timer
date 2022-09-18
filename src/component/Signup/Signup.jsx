import React from 'react'
import "./Signup.css";
import {useNavigate} from "react-router-dom"
import { createUserWithEmailAndPassword } from '@firebase/auth';
import { auth } from '../../firebaseConfig';
import { useState } from 'react';



const Signup = () =>{
    const [email, setEmail] = useState("") 
    const [password, setPassword] =useState("")
    const navigate=useNavigate()
    const loginHandler=()=>{
createUserWithEmailAndPassword(auth,email,password).then((user)=>{
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
            <input value={password} onChange ={(e)=>setPassword(e.target.value)} type="password" name="password" className="inputemail" placeholder="Enter the password"/>
            </div>
            <div>
            <button onClick={loginHandler} className="loginbutton" >Sign up</button>
            </div>
        </div>
        </div>
    )
}
export default Signup
