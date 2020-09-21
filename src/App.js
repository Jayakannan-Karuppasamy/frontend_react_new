import React ,{useState} from 'react';
import { BrowserRouter, Router,Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
// import Register from './components/Register';
// import ForgotPassword from './components/ForgotPassword';
import Home from './components/Home';
import Login from './components/Login';
import Search from './components/Search';
import { createBrowserHistory } from 'history';
import PrivateRoute from './PrivateRoute';
import {AuthContext} from './context/Auth';
import PageNotFound from './components/PageNotFound';


function App(props) {
  //localStorage.removeItem("token");
  console.log("App inside");
  const existingTokens = JSON.parse(localStorage.getItem("token"));
  const [authToken, setAuthToken] = useState(existingTokens);
  
  const setTokens = (data) => {
    console.log("setting token"+data);

    localStorage.setItem("token", JSON.stringify(data));
    setAuthToken(data);
  }

   const history = createBrowserHistory();
//console.log("App.js");
  return (
    <AuthContext.Provider value={{authToken,setAuthToken:setTokens}}>
      <Router history={history}> 
                     <Switch>
                          <Route   path="/login" component={Login} />
                            <PrivateRoute   path="/home" component={Home} />
                            <Route path="*" component={PageNotFound} />
                            </Switch>
                    </Router>
    </AuthContext.Provider>
  );
}

export default App;
