import React, { useState } from "react";
import HomeBackgrdImage from '../images/bank5.png';
import BannerBackgrdImage from '../images/bank6.jpg';
import TextField from '@material-ui/core/TextField';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Fab from '@material-ui/core/Fab';
import { useAuth } from "../context/Auth";

import Item from '../components/Item';


const useStyles = makeStyles((theme) => ({
  root: {
    background: 'linear-gradient(45deg, rgb(98, 138, 248) 30%, rgb(83, 200, 255) 90%)',
    border: 0,
    borderRadius: 30,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
}));


function PageNotFound() {
 
  return (
    <div className="auth-wrapper" style={{ backgroundImage: `url(${HomeBackgrdImage})`, height: "100%" }}>



      <div className="home-inner">
        <div className="home-banner" style={{ backgroundImage: `url(${BannerBackgrdImage})` }}>
          <div><label>404 - PAGE NOT FOUND</label></div>
          <div className="search-group">
            {/* <TextField id="outlined-basic" className="search-box" label="Borrower Name" variant="outlined" />
            <TextField id="outlined-basic" className="search-box" label="Loan Number" variant="outlined" />

            <TextField id="outlined-basic" className="search-box" label="Loan Amount" variant="outlined" />
            {/* <Fab size ="large" className={classes.root} >
        <SearchRoundedIcon />
      </Fab>  */}
          {/* <button type="submit" className="btn btn-primary btn-block" onClick={handleSearch} >Search</button>
           <button type="submit" className="btn btn-primary btn-block" onClick={Logout} >Logout</button> */}

          </div>
        </div>
        <div>
            <label>
      PAGE NOT FOUND 
      GO BACK
      </label>
      </div>
        
     

      </div>
    </div>



  )
}


export default PageNotFound;