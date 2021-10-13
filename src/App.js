import About from "./assets/components/About.js";
import Contact from "./assets/components/Contact.js";
import Header from "./assets/components/Header.js";
import Portfolio from "./assets/components/Portfolio.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
      <Header />
      <Switch>
      <Route
        path = "/"
        exact component = {() => 
        <About/>}
      />
      <Route
        path = "/portfolio"
        exact component = {() => 
        <Portfolio/>}
      />
      <Route
        path = "/contact"
        exact component = {() => 
        <Contact/>}
      />
      {/* <About />
      <Portfolio />
      <Contact /> */}
      </Switch>
      <div>
        <h1>Footer</h1>
      </div>
      </Router>
    </div>
  );
}

export default App;
