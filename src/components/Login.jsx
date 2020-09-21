import React ,{useState} from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import bankImage from '../images/bank1.png'
import axios from 'axios';
import Alert from '@material-ui/lab/Alert';
import {useAuth} from '../context/Auth';
import {  Route , Redirect } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { green } from '@material-ui/core/colors';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
  buttonSuccess: {
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
  fabProgress: {
    color: green[500],
    position: 'absolute',
    top: -6,
    left: -6,
    zIndex: 1,
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
}));


function Login (props) {
  
  const history = useHistory();

  console.log(props);

const [userName,setUserName] = useState('');
const [password,setPassword] = useState('');
const [errorMessage,setErrorMessage] = useState('');
const [isEmailValid,setIsEmailValid] = useState(false);
const [loading, setLoading] = React.useState(false);
const [success, setSuccess] = React.useState(false);

const { setAuthToken } = useAuth();
//const referer = props.location.state.referer || '/';
const classes = useStyles();

const user = {
  email:userName,
  password:password,
}

console.log("inside login");
console.log(loading);

const validateEmail =() =>{
 

  const regExp = RegExp(
    /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
);
   const result = regExp.test(userName);
   setIsEmailValid(result);
   }
const clearInputs =()=>{
setLoading(false);
setUserName('');
setPassword('')
}

const handleLogin = (e)=>{
  e.preventDefault();
  if(!loading)
  {


    setSuccess(false);
    setLoading(true);
  }
console.log(user);
  axios.post('http://localhost:8071/loan-user/users/login',user) //to be configured

.then(response => {
  console.log("Here is response");
  
  console.log(response);
  if (response.data.redirect === '/home') {
    window.location = "/home"
} else if (response.data.redirect === '/login'){
    window.location = "/login"
}
  if (response.status === 200) {
    console.log(response.status);
    setAuthToken(response.headers.token);
    console.log("Logged in ");
    setSuccess(true);
    setLoading(false);
    history.push("/home");
  } else {
    console.log("else part");
    setErrorMessage("Invalid Username or Password");
clearInputs();
  }
}).catch(err =>{
  console.log("ERRRRROR:")
  console.log(err.message);
setErrorMessage("Invalid Username or Password")})
clearInputs();


// setAuthToken("someToken");
// setLoggedIn(true);
}

const buttonClassname = clsx({
  [classes.buttonSuccess]: success,
});



       
   return (
    <div className="auth-wrapper"  style={{backgroundImage:`url(${bankImage})`,height:"100%"}}>
    <div className="inner-box">
    <div className="background-header"> 
    
      <h1>Loan Management</h1>
    
    </div>
    
    <div className="auth-inner">
<form>
<div className="errorMsg" >
   { errorMessage!==''?<Alert severity="error" >{errorMessage}</Alert>:<div></div>}
</div>
    <h3>Sign In</h3>
    <div className="form-group">
        <label>Username</label>
        <input type="email" required="required" className="form-control" placeholder="Email address" onBlur = {validateEmail}   value={userName} onChange={event=>setUserName(event.target.value)}/>
        <label>Password</label>
        <input type="password" required="required" className="form-control" placeholder="Password" value={password}  onChange={event=>setPassword(event.target.value)}/>
        <div className="small-Text">
        <div className="d-flex justify-content-between">
            {/* <div >
            <input type="checkbox" />
            <label style={{paddingLeft:"5px"}}>Remember Me</label>
            </div> */}
            {/* <Link to ="/forgotPassword">Forgot Password?</Link> */}
        </div>
        </div>
        {/* {(userName!==''&&password!=='' )?  */}
     <Button
     variant="contained"
     color="primary"
     className={buttonClassname}
     disabled={loading||(userName===''||password=== '')||!isEmailValid}
     onClick={e=>handleLogin(e)}
   >
     Login
   </Button>
   
          { loading && <CircularProgress size={24} className={classes.buttonProgress} /> }

    {/* :    <button type="submit" className="btn btn-primary btn-block" disabled>Login</button> */}


   {/* <div className="register-link"> <h6>Don't have an account? <Link to="/register">register</Link></h6></div> */}
    </div>
</form>
</div>
</div>
</div>



    )
}


export default Login;