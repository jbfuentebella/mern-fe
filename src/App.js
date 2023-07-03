import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import Registration from './pages/Registration/Registration';
import Dashboard from './pages/Dashboard/Dashboard';
import UserProfile from './pages/UserProfile/UserProfile';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import { HelmetProvider } from 'react-helmet-async';
import NotFound from './pages/NotFound/NotFound';
import ResetPassword from './pages/ResetPassword/ResetPassword';
import { AuthContext } from './services/AuthContext';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const signin = React.useCallback(() => {
    setIsLoggedIn(true);
  }, []);
  const signout = React.useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
      <React.Fragment>
        <Route path="/" exact element={<Navigate to="/dashboard" />} />
        <Route path='/dashboard' exact element={<Dashboard />} />
        <Route path='/user-profile' exact element={<UserProfile />} />
        <Route path='*' element={<NotFound />} />
      </React.Fragment>
    );
  } else {
    routes = (
      <React.Fragment>
        <Route path='/' exact element={<Homepage />} />
        <Route path='/sign-up' exact element={<Registration />} />
        <Route path='/forgot-password' exact element={<ForgotPassword />} />
        <Route path='/reset-password' exact element={<ResetPassword />} />
        <Route path='*' element={<NotFound />} />
      </React.Fragment>
    );
  }

  return (
    <HelmetProvider>
      <AuthContext.Provider value={{ isLoggedIn: isLoggedIn, signin: signin, signout: signout }}>
        <Router>
          <Routes>{routes}</Routes>
        </Router>
      </AuthContext.Provider>
    </HelmetProvider>
  );
};

export default App;
