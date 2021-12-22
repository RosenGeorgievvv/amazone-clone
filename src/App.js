
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/header" element={<Header />} />
          <Route exact path="/checkout" element={<><Header /><h1>This is a checkout, which is about to appear soon!</h1></>} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
