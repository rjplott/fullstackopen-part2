import React, { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import AddPeopleForm from "./components/AddPeopleForm";
import Contacts from "./components/Contacts";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [peopleFilter, setPeopleFilter] = useState("");

  const handleNewName = (event) => {
    setNewName(event.target.value);
  };

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    persons.find((person) => person.name === newName)
      ? alert(`${newName} is already added to phonebook`)
      : axios
          .post("http://localhost:3001/persons", {
            name: newName,
            number: newNumber,
          })
          .then((response) => setPersons(persons.concat(response.data)));

    setNewName("");
    setNewNumber("");
  };

  const filterPhonebook = (event) => {
    setPeopleFilter(event.target.value.toLowerCase());
  };

  const hook = () => {
    axios
      .get("http://localhost:3001/persons")
      .then((response) => setPersons(response.data));
  };

  const filteredPeople = persons.filter((person) =>
    person.name.toLowerCase().includes(peopleFilter)
  );

  useEffect(hook, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={peopleFilter} eventHandler={filterPhonebook} />
      <AddPeopleForm
        handleFormSubmit={handleFormSubmit}
        nameValue={newName}
        handleNewName={handleNewName}
        numberValue={newNumber}
        handleNewNumber={handleNewNumber}
      />
      <h2>Numbers</h2>
      <Contacts contacts={filteredPeople} />
    </div>
  );
};

export default App;
