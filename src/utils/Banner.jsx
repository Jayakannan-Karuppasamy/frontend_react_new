import React from "react";
import bankImage from '../images/bank1.png';

function Banner(){
return (
    <div className="auth-wrapper"  style={{backgroundImage:`url(${bankImage})`,resizeMode:'stretch' }}>
<div className="inner-box">
<div className="background-header"> 

  <h1>Loan Management</h1>

</div>

<div className="auth-inner">

</div>
</div>
</div>
)
}

export default Banner;