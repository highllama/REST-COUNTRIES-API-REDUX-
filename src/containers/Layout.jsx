import React, { useEffect } from "react";
//redux
import { useDispatch } from "react-redux";
import { getFlagsAction } from "../redux/FlagsDucks";
//styles
import "../assets/styles/components/Layout.scss";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  let darkModeButton
  const body = document.body;
  const dispatch = useDispatch();
 

  useEffect(() => {
    dispatch(getFlagsAction());
    darkModeButton = document.querySelector('#darkModeButton')
  }, []);

  const HandleDarkMode = () => {
    body.classList.toggle("darkMode");
    darkModeButton.classList.toggle('fas')
    darkModeButton.classList.toggle('far')
  };

  return (
    <>
      <header>
        <nav className="wrapper">
          <h2>
            <Link to="/">Where in the world?</Link>
          </h2>
          <span onClick={() => HandleDarkMode()}>
            <i className={`fas fa-moon`} id="darkModeButton"></i>Dark Mode
          </span>
        </nav>
      </header>
      {children}
      <footer></footer>
    </>
  );
};

export default Layout;
