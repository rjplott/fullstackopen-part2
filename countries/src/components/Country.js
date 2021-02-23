import React, { useState } from "react";
import Weather from "./Weather";

const Country = ({ displayDetails, country }) => {
  const [showDetails, setShowDetails] = useState(displayDetails);

  const handleClick = () => {
    setShowDetails(true);
  };

  if (!showDetails) {
    return (
      <div>
        {country.name}{" "}
        <button type="button" onClick={handleClick}>
          show
        </button>
      </div>
    );
  }

  return (
    <div>
      <h1>{country.name}</h1>
      <p>capital {country.capital}</p>
      <p>population {country.population}</p>
      <h2>languages</h2>
      <ul>
        {country.languages.map((language) => (
          <li key={language.iso639_1}>{language.name}</li>
        ))}
      </ul>
      <img src={country.flag} alt="Country's flag" />
      <Weather country={country} />
    </div>
  );
};

export default Country;
