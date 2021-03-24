import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as ROUTES from '../../Constants/Routes';
import Navigation from '../Navigation/NavIndex';

import LandingPage from '../Landing/LandingIndex';
import SignUpPage from '../SignUp/SignUpIndex';
import SignInPage from '../SignIn/SignInIndex';
import PasswordForgetPage from '../PasswordForget/PwForgetIndex';
import Home from '../Home/HomeIndex';
import AccountPage from '../Account/AccountIndex';
import AdminPage from '../Admin/AdminIndex';

const App = () => (
  <div>
     <Router>
       <div>
    <Navigation />
    <hr />
    <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
      <Route path={ROUTES.HOME} component={Home} />
      <Route path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route path={ROUTES.ADMIN} component={AdminPage} />
    </div>
  </Router>
  </div>
);
 
export default App;