import React from "react";
import { Link } from "react-router-dom";
//redux
import { useSelector } from "react-redux";

//components
import Country from "./Country";
import Loading from "../containers/Loading";
//style
import "../assets/styles/components/Countries.scss";

const Countries = ({ search, region }) => { 
  const flags = useSelector((store) => store.flags.array);
  const INTL = new Intl.NumberFormat("es-CO")
  

  let data = flags;
  data = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  if (region) {
    data = data.filter((item) => item.region === region);
  }

  return flags.length === 0 ? <Loading /> :  (
    <div className="Countries wrapper">
      {data.map((item) => (
        <Link to={`${item.name}`} key={item.name}>
          <Country
            name={item.name}
            flag={item.flag}
            population={INTL.format(item.population) }
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
