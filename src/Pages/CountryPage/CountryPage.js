import React, { useEffect, useState } from "react";
import CountryCard from "../../components/CountryCard/CountryCard";
import { withRouter } from "react-router-dom";

const CountryPage = ({match}) => {
  const [country, setCountry] = useState();
  const countryName = match?.params?.name;
  const setCountryData = async (country) => {
    const countryData = await fetch(
      `https://restcountries.com/v3.1/name/${country}`
    ).then((reponse) => reponse.json());
    setCountry(countryData[0]);
  };

  useEffect(() => {
    setCountryData(countryName);
  }, [countryName]);

  if (!country) {
    return "...loading";
  }
  return <CountryCard country={country} />;
};

export default withRouter(CountryPage);
