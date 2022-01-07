import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Checkout from './Checkout';


function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<h1>Login Page</h1>} />
          <Route exact path="/checkout" element={<Checkout />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
