import React from "react";
import { Link } from "react-router-dom";
import MyButton from "./UI/MyButton/MyButton";

const Header = () => {
  return (
    <header>
      <div>
        <span className="logo_img"></span>
        <Link className="logo" to="/">
          Kristinarell
        </Link>
      </div>
      <nav>
        <Link className="navLink">About Us</Link>
        <Link to="/posts" className="navLink">
          All Post
        </Link>
        <Link className="navLink">Sign In</Link>
        <Link className="navLink">
          <MyButton>Sign Up</MyButton>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
