import React, { useState } from "react";

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
  const [filteredPeople, setFilteredPeople] = useState(persons);

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
    const currentFilter = event.target.value.toLowerCase();

    setPeopleFilter(currentFilter);
    setFilteredPeople(
      persons.filter((person) =>
        person.name.toLowerCase().includes(currentFilter)
      )
    );
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <label>
          filter shown with{" "}
          <input value={peopleFilter} onChange={filterPhonebook} />
        </label>
      </div>
      <form onSubmit={handleFormSubmit}>
        <div>
          name: <input value={newName} onChange={handleNewName} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNewNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {filteredPeople.map((person) => (
          <li key={person.name}>
            {person.name} {person.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
