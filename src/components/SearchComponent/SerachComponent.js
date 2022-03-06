import React, { useState } from "react";
import { Link } from "react-router-dom";
import './SearchComponent.css';

const SerachComponent = ({ data = [], placeHolder = "Search by Country" }) => {
  const [term, setTerm] = useState("");
  let results = [];
  if (!!term.trim()) {
    results = data.filter((d) =>
      d?.name?.common?.toLowerCase().includes(term.toLowerCase())
    );
  }

  const termChanged = (e) => {
    setTerm(e.target.value);
  };
  return (
    <div className="searchComponent">
      <input
        type="text"
        placeholder={placeHolder}
        value={term}
        onChange={termChanged}
      />
      {!!results.length && (
        <ul className="searchResults">
          {results.map((r) => (
            <li key={r?.name?.common}>
              <Link to={`/${r?.name?.common}`}>
                {r?.name?.common || r?.name?.official}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SerachComponent;
