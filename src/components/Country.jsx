import React from "react";
//style
import "../assets/styles/components/Country.scss";

const Country = (props) => {
  const { flag, name, population, capital, region } = props;
  return (
    <div className="Country">
      <div className="Country__flag">
        <img src={flag} alt={name} />
      </div>
      <div className="Country__info">
        <h2>{name}</h2>
        <h3>
          <strong>Population: </strong> {population}
        </h3>
        <h3>
          <strong>Region: </strong>
          {region}
        </h3>
        <h3>
          <strong>Capital: </strong>
          {capital}
        </h3>
      </div>
    </div>
  );
};

export default Country;
