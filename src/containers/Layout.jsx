import React from "react";
//styles
import "../assets/styles/components/Layout.scss";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <nav className="wrapper">
          <h2>
            <Link to='/'>Where in the world?</Link>
          </h2>
        </nav>
      </header>
      {children}
      <footer></footer>
    </>
  );
};

export default Layout;
