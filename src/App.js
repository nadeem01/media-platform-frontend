import React, { useEffect } from 'react';
import './App.css';
import { Button } from 'reactstrap';
import Media from './pages/Media';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import Login from './pages/Login';

import Signup from './pages/Register';
import Navbar from './components/Navbar';
import { Home } from './pages/Home';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser } from './components/Auth/actions';

function App() {
  const dispatch = useDispatch();
  const { currentUser, authToken } = useSelector((state) => state.auth);
  useEffect(() => {
    if (!!localStorage.getItem('authToken')) {
      const token = localStorage.getItem('authToken');
      dispatch(setCurrentUser(token));
    }
  }, []);
  return (
    <div className='app'>
      <Router>
        <Navbar />
        <Switch>
          {!authToken && (
            <React.Fragment>
              <Route exact path='/login'>
                <Login />
              </Route>
              <Route exact path='/signup'>
                <Signup />
              </Route>
            </React.Fragment>
          )}

          {authToken && (
            <React.Fragment>
              <Route exact path='/media'>
                <Media />
              </Route>
              <Route exact path='/home'>
                <Home />
              </Route>
            </React.Fragment>
          )}

          <Redirect to='/login' />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
