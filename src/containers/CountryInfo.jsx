import React from "react";
//hooks
import useData from "../hooks/useData";
import { Link } from "react-router-dom";
//styles
import "../assets/styles/components/CountryInfo.scss";

const CountryInfo = (props) => {
  const data = useData(`/name/${props.match.params.country}`);
  const country = data[0];
  console.log(data);

  return country == null ? (
    "Loading"
  ) : (
    <div className="CountryInfo wrapper">
      <div>
        <Link to="/">
          <button>{"<----- Back"}</button>
        </Link>
      </div>
      <div className="CountryInfo__details">
        <div className='CountryInfo__flag'>
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
            <div>
              <h3>
                <strong>Top Level Domain: </strong>
                {country.topLevelDomain}
              </h3>
              <h3>
                <strong>Currencies: </strong>
                {country.currencies.map((item) => `${item.code}`)}
              </h3>
            </div>
          </div>
          {/* <div>
            <h3>Border Countries: </h3>{" "}
            {country.borders.map((item) => (
              <button key={item}>{item}</button>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CountryInfo;
