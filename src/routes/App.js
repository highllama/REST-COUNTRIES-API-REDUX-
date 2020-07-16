import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
//styles
import normalize from 'normalize.css'
import "../assets/styles/App.scss";

//components
import Layout from "../containers/Layout";
import Home from "../containers/Home";
import CountryInfo from "../containers/CountryInfo";
//redux
import { Provider } from "react-redux";
import Store from "../redux/store";

const App = () => {
  const store = Store();

  
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Route exact path="/" component={Home} />
          <Route exact path="/:country" component={CountryInfo} />
        </Layout>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
