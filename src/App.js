import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import MainNavigation from "./shared/components/Navigation/MainNavigation";
import About from "./User/pages/About";
import Blog from "./User/pages/Blog";
import Gallery from "./User/pages/Gallery";
import Contact from "./User/pages/Contact";
import Landing from "./User/pages/Landing";

import "./App.css";
import "./MobileApp.css";

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/about" component={About} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
