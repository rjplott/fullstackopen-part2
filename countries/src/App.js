import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import axios from "axios";
import Results from "./components/Results";

function App() {
  const [currentFilter, setCurrentFilter] = useState("");
  const [countries, setCountries] = useState([]);

  const updateFilter = (evt) => {
    setCurrentFilter(evt.target.value);
  };

  const hook = () => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      setCountries(response.data);
    });
  };

  useEffect(hook, []);

  return (
    <div>
      <Search filter={currentFilter} changeHandler={updateFilter} />
      <Results countries={countries} filter={currentFilter} />
    </div>
  );
}

export default App;
