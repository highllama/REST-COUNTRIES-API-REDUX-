import React from "react";
//redux
import { useSelector, useDispatch } from "react-redux";
//hooks
import useData from "../hooks/useData";
import { Link } from "react-router-dom";
//styles
import "../assets/styles/components/CountryInfo.scss";

const CountryInfo = (props) => {
  
  const data = useSelector((store) => store.flags.array);
  const init = data.filter(
    (item) => { return item.name == props.match.params.country
     } );
    const country = init[0]
  
 
  return country == null ? (
    "Loading"
  ) : (
    <div className="CountryInfo wrapper">
      <div>
        <Link to="/">
          <button id="backButton">{"<----- Back"}</button>
        </Link>
      </div>
      <div className="CountryInfo__details">
        <div className="CountryInfo__flag">
          <img src={country.flag} alt={country.name} />
        </div>
        <div>
          <h1>{country.name}</h1>
          <div className="CountryInfo__details__secondary">
            <div>
              <h3>
                <strong>Native name: </strong>
                {country.nativeName}
              </h3>
              <h3>
                <strong>Population: </strong>
                {country.population}
              </h3>
              <h3>
                <strong>Region: </strong>
                {country.region}
              </h3>
              {country.subregion ? (
                <h3>
                  <strong>Sub Region: </strong>
                  {country.subregion}
                </h3>
              ) : null}
              <h3>
                <strong>Capital: </strong>
                {country.capital}
              </h3>
            </div>
            <div className="CountryInfo__details__secondary__rigth">
              <h3>
                <strong>Top Level Domain: </strong>
                {country.topLevelDomain}
              </h3>
              <h3>
                <strong>Currencies: </strong>
                {country.currencies.map((item) => `${item.code}`)}
              </h3>
              <h3>
                <strong>Languages: </strong>
                {country.languages.map((item) => item.name + ', ')}
              </h3>
            </div>
            <div className="CountryInfo__borders">
              <h3>Border Countries: </h3>

              {country.borders.map((item) => (
                <div key={item}>
                  <button key={item} id="borderButton">
                    {item}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryInfo;
