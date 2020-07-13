import React, { useState, useEffect } from "react";
//components
import MainSearch from "../components/MainSearch";
import Countries from "../components/Countries";

const Home = () => {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState(null);

  const HandleSearch = (e) => {
    setSearch(e.currentTarget.value);
  };
  const HandleRegionSearch = (e) => {
    setRegion(e.currentTarget.value)
  }
  console.log(region);

  return (
    <>
      <MainSearch HandleSearch={HandleSearch} HandleRegionSearch={HandleRegionSearch} />
      <Countries search={search} region={region} />
    </>
  );
};

export default Home;
