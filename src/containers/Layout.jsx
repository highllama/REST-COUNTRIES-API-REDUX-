import React, { useEffect } from "react";
//redux
import { useDispatch } from "react-redux";
import {getFlagsAction} from '../redux/FlagsDucks'
//styles
import "../assets/styles/components/Layout.scss";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFlagsAction());
  }, []);
  return (
    <>
      <header>
        <nav className="wrapper">
          <h2>
            <Link to="/">Where in the world?</Link>
          </h2>
        </nav>
      </header>
      {children}
      <footer></footer>
    </>
  );
};

export default Layout;
