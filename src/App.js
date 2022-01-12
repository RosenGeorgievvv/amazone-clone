import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Checkout from './Checkout';
import Login from './Login'
import { useEffect } from 'react';
import { auth } from './firebase';

function App() {

  useEffect(() => {

    //will only run once when the app component loads

    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

      } else {
        // the user is logged out
      }
    })
  }, [])
  return (
    <Router>
      <div className="app">

        <Routes>
          <Route exact path="/" element={<><Header /> <Home /></>} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/checkout" element={<><Header /><Checkout /></>} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
