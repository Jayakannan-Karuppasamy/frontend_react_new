import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import bankImage from '../images/bank1.png';
import {Link,useHistory} from 'react-router-dom';


function Register () {
    const history = useHistory();
    const handleRegister = ()=>{
        history.push("/")
         }
   return (
    <div className="auth-wrapper"  style={{backgroundImage:`url(${bankImage})`,resizeMode:'stretch' }}>
    <div className="inner-box">
    <div className="background-header"> 
    
      <h1>Loan Management</h1>
    
    </div>
    
    <div className="auth-inner" style={{height:"550px"}}>
<form>

    <h3>Register </h3>
    <div className="form-group">
    <label>Firstname</label>
        <input type="text" className="form-control" placeholder="First Name"/>
        <label>Lastname</label>
        <input type="text" className="form-control" placeholder="Last Name"/>
        
        <label>Email Address</label>
        <input type="email" className="form-control" placeholder="Email address"/>
        <label>Password</label>
        <input type="password" className="form-control" placeholder="Password"/>
    <button type="submit" className="btn btn-primary btn-block" onClick={handleRegister} >Register</button>
  
    </div>
</form>
</div>
</div>
</div>

    )
}


export default Register;