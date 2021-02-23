import React, { useState, useEffect } from "react";
import numberServices from "./services/numbers";
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

  const handleDeletePerson = (id, name) => {
    const checkDelete = window.confirm(`Do you really want to delete ${name}?`);

    if (checkDelete) {
      numberServices
        .deleteNumber(id)
        .then(() => setPersons(persons.filter((person) => person.id !== id)));
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    persons.find((person) => person.name === newName)
      ? alert(`${newName} is already added to phonebook`)
      : numberServices
          .addNumber({ name: newName, number: newNumber })
          .then((newContact) => setPersons(persons.concat(newContact)));

    setNewName("");
    setNewNumber("");
  };

  const filterPhonebook = (event) => {
    setPeopleFilter(event.target.value.toLowerCase());
  };

  const hook = () => {
    numberServices
      .getNumbers()
      .then((initialNumbers) => setPersons(initialNumbers));
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
      <Contacts deleteHandler={handleDeletePerson} contacts={filteredPeople} />
    </div>
  );
};

export default App;
