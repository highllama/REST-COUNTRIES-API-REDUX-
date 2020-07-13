import React from "react";
//styles
import "../assets/styles/components/MainSearch.scss";

const MainSearch = ({HandleSearch, HandleRegionSearch}) => {
  return (
    <div className="MainSearch wrapper">
      <div className="MainSearch__country">
        <input type="text" placeholder="Search for a country..." onChange={(e ) => HandleSearch(e)} />
      </div>
      <div>
        <select  id="RegionSearch" onChange={(e) => HandleRegionSearch(e)} >
          <option value='' >Filter by Region </option>
          <option value="Africa">Africa</option>
          <option value="Americas">América</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
};

export default MainSearch;
