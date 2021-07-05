import React from "react";
import { Route, Switch } from "react-router";
import { AuthRoute, ProtectedRoute } from "../util/route.util";
import Home from "./home";
import LoginFormContainer from "./sessions/login_form_container"
import NavBarContainer from "./sessions/Nav/navbar_container";
import SignupFormContainer from "./sessions/signup_form_container"

const App = () => (
    <div>
        <Switch>
            <Route exact path ="/" component={NavBarContainer}/>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
        </Switch>
        
        <ProtectedRoute path= "/" component={Home}/>
        
    </div>
  );
  
  export default App;