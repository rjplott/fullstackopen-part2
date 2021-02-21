import React, { useState } from "react";
import Filter from "./components/Filter";
import AddPeopleForm from "./components/AddPeopleForm";
import Contacts from "./components/Contacts";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);
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
      : setPersons(persons.concat({ name: newName, number: newNumber }));

    setNewName("");
    setNewNumber("");
  };

  const filterPhonebook = (event) => {
    setPeopleFilter(event.target.value.toLowerCase());
  };

  const filteredPeople = persons.filter((person) =>
    person.name.toLowerCase().includes(peopleFilter)
  );

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
