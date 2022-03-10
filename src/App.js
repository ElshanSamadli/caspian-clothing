import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import Header from "./Components/Header/Header";
import HomePage from "./Pages/HomePage/HomePage";
import ShopPage from "./Pages/ShopPage/ShopPage";
import SignInAndSignUpPage from "./Pages/SignIn and SignUP Page/SignInAndSignUpPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signIn" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
