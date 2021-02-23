import React, { useState, useEffect } from "react";
import numberServices from "./services/numbers";
import Filter from "./components/Filter";
import AddPeopleForm from "./components/AddPeopleForm";
import Contacts from "./components/Contacts";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [peopleFilter, setPeopleFilter] = useState("");
  const [notification, setNotification] = useState("test message");
  const [isError, setIsError] = useState(false);

  const handleNewName = (event) => {
    setNewName(event.target.value);
  };

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const handleDeletePerson = (id, name) => {
    const checkDelete = window.confirm(`Do you really want to delete ${name}?`);

    if (checkDelete) {
      numberServices.deleteNumber(id).then(() => {
        setPersons(persons.filter((person) => person.id !== id));
        setNotification(`${name} was successfully deleted!`);
        setTimeout(() => {
          setNotification("");
        }, 5000);
      });
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const person = persons.find((person) => person.name === newName);

    if (person) {
      const updateNumber = window.confirm(
        `${newName} is already added to phonebook.  Would you like to update their information?`
      );

      if (updateNumber) {
        numberServices
          .updateNumber(person.id, { ...person, number: newNumber })
          .then((updatedPerson) => {
            setPersons(
              persons.map((person) =>
                person.id === updatedPerson.id ? updatedPerson : person
              )
            );
            setNotification(`${person.name} was successfully updated!`);
            setTimeout(() => {
              setNotification("");
            }, 5000);
          })
          .catch((error) => {
            setIsError(true);
            setNotification(
              `${person.name} was already deleted from the server`
            );

            setPersons(persons.filter((p) => p.id !== person.id));

            setTimeout(() => {
              setNotification("");
              setIsError(false);
            }, 5000);
          });
      }
    } else {
      numberServices
        .addNumber({ name: newName, number: newNumber })
        .then((newContact) => {
          setPersons(persons.concat(newContact));
          setNotification(`${newContact.name} was added successfully!`);
          setTimeout(() => {
            setNotification("");
          }, 5000);
        });
    }

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
      <Notification message={notification} isError={isError} />
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
