import React from "react";
import Country from "./Country";

const countries = ({ countries, filter }) => {
  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().startsWith(filter)
  );

  if (filteredCountries.length === 1) {
    return <Country displayDetails={true} country={filteredCountries[0]} />;
  }

  if (filteredCountries.length > 10) {
    return <p>Too many countries, try a different filter</p>;
  }

  return (
    <div>
      {filteredCountries.map((country) => {
        return (
          <Country
            key={country.name}
            displayDetails={false}
            country={country}
          />
        );
      })}
    </div>
  );
};

export default countries;
