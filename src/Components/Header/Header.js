import React from "react";
import { Link } from "react-router-dom";

import { auth } from "../../Firebase/firebase.utils";

import { ReactComponent as Logo } from "../../Assets/crown.svg";

import "./Header.styles.scss";

const Header = ({ currentUser }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
      <Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signIn">
            SIGN IN
          </Link>
        )}
      </Link>
    </div>
  </div>
);

export default Header;
