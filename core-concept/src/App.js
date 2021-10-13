import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./Home";
import Services from "./Services";
import About from "./About";
import Contact from "./Contact";
import SiteNav from "./SiteNav";

function App() {
  return (
    <>
      <Router>
        <SiteNav/>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/home">{Home}</Route>
          <Route exact path="/services" component={Services}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/contact" component={Contact}></Route>
          <Route exact path="*" component={Home}></Route>
        </Switch>
      </Router>
    </>
  );
}
export default App;
