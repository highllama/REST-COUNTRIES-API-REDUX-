import React from "react";
import { Link } from "react-router-dom";
//components
import Country from "./Country";
//hooks
import useinitialState from "../hooks/useData";
//style
import "../assets/styles/components/Countries.scss";

const Countries = ({ search, region }) => {
  let data = useinitialState();
  data = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  if  (region) {
    data = data.filter((item) => item.region == region)
  }

  return (
    <div className="Countries wrapper">
      {data.map((item) => (
        <Link to={`${item.name}`} key={item.name}>
          <Country
            name={item.name}
            flag={item.flag}
            population={item.population}
            region={item.region}
            capital={item.capital}
            key={item.name}
          />
        </Link>
      ))}
    </div>
  );
};

export default Countries;
