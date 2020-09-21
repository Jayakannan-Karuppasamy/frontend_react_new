import React from "react";
import {Route, Redirect,Switch} from "react-router-dom";
import {useAuth} from "./context/Auth";
import { useHistory } from 'react-router-dom';


function PrivateRoute  ( {component:Component ,...rest}){
    const history =useHistory();
    const {authToken} = useAuth();
    console.log("PrivateRoute")
    console.log(authToken);
    console.log(rest);
    console.log(Component);

    authToken?console.log("authToken True"):
        console.log("auth Token false")
    
        
    
    
    return (
        <Switch>
    <Route  {...rest} render= {props=>
        authToken?(
        <Component {...props} /> )
        :(
        <Redirect to="/login" />
        
)}
/></Switch>

    )
}

export default PrivateRoute;