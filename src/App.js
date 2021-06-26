import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import About from './About'
import Home from './Home'
import Work from './Work'
import Contact from './Contact';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/work">
            <Work />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
      <footer>
        <p className="center-text">
          © 2021.Muhamad Samsul Arifin, All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
