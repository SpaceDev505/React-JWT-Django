import React, { useState } from "react";
import { Link } from "react-router-dom";
const SignIn = () =>{
    const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')
    return (
       <div className="auth">
        <div className="auth-form">
            <div className="form-header">
                <div className="subtitle">Sign In</div>
                <Link className="link"  to={'/signup'}>I don't have an account</Link>
            </div>
            <div className="content">
                <input className="form-control" placeholder="Enter your email"/>
                <input className="form-control" placeholder="Enter your password"/>
                <button className="submit" >SignIn</button>
            </div>
        </div>
       </div>
    );
}

export default SignIn
