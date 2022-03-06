import React from "react";
import { rounded } from "../MapChart/MapChart";
import "./CountryCard.css";

const CountryCard = ({ country }) => {
  console.log(country);
  return (
    <div className="card">
      {country?.name?.common && <h2>{country?.name?.common}</h2>}
      {country?.flags?.png && (
        <figure>
          <img src={country?.flags?.png} alt={country?.name?.common} />
        </figure>
      )}

      {!!country?.capital?.length && (
        <p>
          <strong>Capital: </strong>
          <span>{country?.capital[0]}</span>
        </p>
      )}
      {country?.region && (
        <p>
          <strong>Region: </strong>
          <span>{country?.region}</span>
        </p>
      )}
      {country?.population && (
        <p>
          <strong>Population: </strong>
          <span>{rounded(country?.population)}</span>
        </p>
      )}
    </div>
  );
};

export default CountryCard;
