import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Checkout from './Checkout';
import Login from './Login'
import Payment from './Payment';
import Orders from './Orders';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider'
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe('pk_test_51KK2q2H0i7873LQ7XQsVYTSSHYD4luw2QyWaRYYP8XntUOIJeXNXd2ItFVy9Q9wFMBYjbBPrRK1Cq8xYA6mPU71Y00j610GlKi')

function App() {
  // eslint-disable-next-line no-empty-pattern
  const [{ }, dispatch] = useStateValue()

  useEffect(() => {

    //will only run once when the app component loads

    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <Router>
      <div className="app">

        <Routes>
          <Route exact path="/" element={<><Header /> <Home /></>} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/checkout" element={<><Header /><Checkout /></>} />
          <Route exact path="/payment" element={<><Header /><Elements stripe={promise}><Payment /></Elements></>} />
          <Route exact path="/orders" element={<><Header /><Orders /></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
