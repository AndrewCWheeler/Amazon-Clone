import React, { useEffect } from 'react';
import './App.css';
import Header from '../src/components/Header/Header';
import Home from '../src/views/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './views/Checkout/Checkout';
import Login from '../src/views/Login/Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { Payment } from './views/Payment/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { Orders } from './views/Orders/Orders';

const promise = loadStripe(
  'pk_test_51GvQePKA8MgT44kMkOez7O3ZOz0qrPiSgMBXk9Jhjx7zEiVvABKfgSFaMW72cAAkDH8qK9AApTCNyx7wUeDrTpae004NaoVDP1'
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>> ', authUser);
      if (authUser) {
        // the user just loggin in / the user was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  }, []);

  return (
    // BEM
    <Router>
      <div className='app'>
        <Switch>
          <Route path='/orders'>
            <Header />
            <Orders />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>
          <Route path='/payment'>
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
