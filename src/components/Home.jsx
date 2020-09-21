import React, { useState } from "react";
import HomeBackgrdImage from '../images/bank5.png';
import BannerBackgrdImage from '../images/bank6.jpg';
import TextField from '@material-ui/core/TextField';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Fab from '@material-ui/core/Fab';
import { useAuth } from "../context/Auth";
import { useHistory } from 'react-router-dom';

import Item from '../components/Item';


const useStyles = makeStyles((theme) => ({
  main:{
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  textField:{
    
  },
  button: {
    background: 'linear-gradient(45deg, rgb(98, 138, 248) 30%, rgb(83, 200, 255) 90%)',
    border: 0,
    borderRadius: 30,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  logoutbutton: {
    background: 'linear-gradient(45deg, rgb(98, 138, 248) 30%, rgb(83, 200, 255) 90%)',
    border: 0,
    borderRadius: 30,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    width:'150px',
    color: 'white',
    height: 55,
    padding: '0 30px',
    fontSize:'20px',
    alignSelf:'flex-end',
    paddingRight:'30px'
  },
}));


function Home(props) { 
   const history = useHistory();

  const classes = useStyles();
  const { authToken,setAuthToken } = useAuth();


  const [borrowerName, setBorrowerName] = useState('');
  const [loanAmount, setLoanAmount] = useState('');
  const [loanNumber, setLoanNumber] = useState('');
  const [result, setResult] = useState([]);
  const [error, setError] = useState('');


  const Logout = (e)=>{
    e.preventDefault();
    console.log(authToken);
    
    console.log("setting Token to undefined");
    
    setAuthToken(null);
    console.log(authToken);
    localStorage.clear("token");
    window.location="/login";
  }

  const handleSearch = () => {
    setError(null);
    const requestSearch ={
      loanAmount:loanAmount,
      fullName:borrowerName,
      loanNumber:loanNumber
    }
    console.log(borrowerName+" - "+loanAmount+" -  "+loanNumber);
    
    borrowerName===''&&loanNumber===''&&loanAmount===''?setError("Please enter any one field to search")
    :

    axios.post('http://localhost:8071/borrower-information-service/loan/search', 
    requestSearch,
    {
    headers:{
      Authorization:"Bearer "+authToken,
    }
  }) //to be configured
      .then(response => {
        console.log(response);
        const status = response.data;
        console.log(status);

        setResult([ status]);
      })
      .catch(error => {

        console.log("got errrrrrror");
        setError("No records found");
      });
    
  }

  // const loanDetails = [
  //   { BorrowerName: 'Sam', LoanAmount: 20000, LoanNumber: 12345 },
  //   { BorrowerName: 'Bala', LoanAmount: 30000, LoanNumber: 12346 },
  //   { BorrowerName: 'Jai', LoanAmount: 40000, LoanNumber: 12347 },
  //   { BorrowerName: 'Bharat', LoanAmount: 50000, LoanNumber: 12348 },
  //   { BorrowerName: 'Ram', LoanAmount: 60000, LoanNumber: 12349 },

  // ];
  return (
    <div className="auth-wrapper" style={{ backgroundImage: `url(${HomeBackgrdImage})`, height: "100%" }}>


<button type="submit" className={classes.logoutbutton} onClick={e=>Logout(e)} >Logout</button>

      <div className="home-inner">
        <div className="home-banner" style={{ backgroundImage: `url(${BannerBackgrdImage})` }}>
          <div><label>Search</label></div>
          <div className={classes.main}>
            <TextField id="outlined-basic"  size="medium" placeholder="Borrower Name" className="search-box" label="Borrower Name" variant="outlined" value={borrowerName}  onChange={event=>setBorrowerName(event.target.value)}/>
            <TextField id="outlined-basic" type="number" placeholder="0" className="search-box" label="Loan Number" variant="outlined" value={loanNumber}  onChange={event=>setLoanNumber(event.target.value) }/>

            <TextField id="outlined-basic" type="number" placeholder="0" className="search-box" label="Loan Amount" variant="outlined" value={loanAmount}  onChange={event=>setLoanAmount(event.target.value)}/>
            {/* <Fab size ="large" className={classes.root} >
        <SearchRoundedIcon />
      </Fab>  */}
           <button type="submit" className={classes.button} onClick={e=>handleSearch(e)} >Search</button>

          </div>
        </div>
        
        {error?<div>{error}</div>:result.map((item) =>
          <Item key={item} item={item} />
        )
        }
     

      </div>
    </div>



  )
}


export default Home;