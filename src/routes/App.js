import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
//styles
import "../assets/styles/App.scss";
//components
import Layout from "../containers/Layout";
import Home from '../containers/Home'
import CountryInfo from '../containers/CountryInfo'

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
          <Route exact path='/' component={Home} />
          <Route exact path='/:country' component={CountryInfo} />
      </Layout>
    </BrowserRouter>
  );
};

export default App;
