import MapChart from "../../components/MapChart/MapChart";
import ReactTooltip from "react-tooltip";
import { withRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import SerachComponent from "../../components/SearchComponent/SerachComponent";

const CountriesPage = ({ history }) => {
  const [content, setContent] = useState("");
  const [countries, setCountries] = useState([]);
  const countrySelected = (country) => {
    const { NAME } = country.properties;
    history.push(`/${NAME.toLowerCase()}`);
  };
  const fetchCountries = () => {
    return fetch("https://restcountries.com/v3.1/all").then((response) =>
      response.json()
    );
  };
  useEffect(() => {
    fetchCountries().then((data) => {
      // console.log("test", data);
      setCountries(data);
    });
  }, []);

  return (
    <>
      <SerachComponent data={countries} />
      <MapChart
        setTooltipContent={setContent}
        onCountrySelected={countrySelected}
      />
      <ReactTooltip>{content}</ReactTooltip>
    </>
  );
};

export default withRouter(CountriesPage);
