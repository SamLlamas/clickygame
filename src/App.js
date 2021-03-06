import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Navbar from "./components/Navbar";

const App = () => (
  <Router>
    <div>
      <Navbar />
      <div>
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
      </div>
    </div>
  </Router>
);

export default App;
