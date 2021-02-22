import React from 'react';
import './App.css';
{
BrowserRouter as Router,
Route,
} from "react-router-dom";
import { Link } from "react-router-dom";
import Home from './contents/Home';
import About from './contents/About';
import Education from './contents/Education';
import Skills from './contents/Skills';
import Contact from './contents/Contact';

function App() {
   render(){
  return (
  <Router>
    <div className="App">
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/education" component={Education} />
          <Route path="/skills" component={Skills} />
          <Route path="/contact" component={Contact} />

          <div className="nav">
              <Link to="/" className="item">Home</Link>
              <Link to="/about" className="item">About</Link>
              <Link to="/education" className="item">Education</Link>
              <Link to="/skills" className="item">Skills</Link>
              <Link to="/contact" className="item">Contact</Link>

          </div>
    </div>
  </Router>
  )
}}
export default App;
