import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Nav from "./components/Nav/Nav";
import Menu from "./pages/Menu/Menu";
import Gallery from "./pages/Gallery/Gallery";
import Register from "./pages/Register/Register";
import Order from "./pages/Order/Order";
function App() {
  const user = false;
  return (
    <div className="app">
      <Nav />
      <Router>
        <Switch>
          <Route exact path="/">
            {user ? <Home /> : <Register />}
          </Route>
          <Route exact path="/menu">
            {user ? <Menu /> : <Register />}
          </Route>
          <Route exact path="/gallery">
            {user ? <Gallery /> : <Register />}
          </Route>
          <Route exact path="/order">
            {user ? <Order /> : <Register />}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
