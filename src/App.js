import React from 'react';
import './App.css';
import
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

return (
<Router>
  <div className="App">
        <Route exact path="/cv/" component={Home} />
        <Route path="cv/about" component={About} />
        <Route path="cv/education" component={Education} />
        <Route path="cv/skills" component={Skills} />
        <Route path="cv/contact" component={Contact} />

        <div className="nav">
            <Link to="cv/" className="item">Home</Link>
            <Link to="cv/about" className="item">About</Link>
            <Link to="cv/education" className="item">Education</Link>
            <Link to="cv/skills" className="item">Skills</Link>
            <Link to="cv/contact" className="item">Contact</Link>
        </div>
  </div>
</Router>
)
}
export default App;
