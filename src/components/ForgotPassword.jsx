import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router ,Switch,Route,Link} from 'react-router-dom';
import Register from '../components/Register';
import bankImage from '../images/bank1.png';

function ForgotPassword () { 
   return ( 
    <div className="auth-wrapper"  style={{backgroundImage:`url(${bankImage})`,resizeMode:'stretch' }}>
    <div className="inner-box">
    <div className="background-header"> 
    
      <h1>Loan Management</h1>
    
    </div>
    
    <div className="auth-inner">
<form>

    <h3>Forgot Password ? </h3>
    <div className="form-group">
      <h6>Please enter your Email Address to send the reset link.</h6>
        <label>Username</label>
        <input type="email" className="form-control" placeholder="Email address"/>
       
    <button type="submit" className="btn btn-primary btn-block" >Submit</button>
   <div className="register-link"> <h6> <Link to="/">⇽ Go back to Login</Link></h6></div>
    </div>
</form>
</div>
</div>
</div>

    )
}


export default ForgotPassword;