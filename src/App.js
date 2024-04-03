import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import Footer from "./components/Footer";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import DirectorMessage from "./components/DirectorMessage";
import TpoMessage from "./components/TpoMessage";
import AboutUs from "./components/aboutUs";
import Page404 from "./components/404";
import Login from "./components/Login";
import IndustryLogin from "./components/IndustryLogin";
import Schedule from "./components/Schedule";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <div className="main-page">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/message/director" exact component={DirectorMessage} />
            <Route path="/message/tpo" exact component={TpoMessage} />
            <Route path="/about-us" exact component={AboutUs} />
            <Route path="/login" exact component={Login} />
            <Route path="/industry/login" exact component={IndustryLogin} />
            <Route path="/schedule" exact component={Schedule} />
            <Route to="/404" component={Page404} />
          </Switch>
        </div>
        <div className="footer-outer-wrapper">
          <Footer />
        </div>
      </Fragment>
    );
  }
}

export default App;
