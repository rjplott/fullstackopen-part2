import React from "react";

const AddPeopleForm = ({
  handleFormSubmit,
  nameValue,
  handleNewName,
  numberValue,
  handleNewNumber,
}) => {
  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        name: <input value={nameValue} onChange={handleNewName} />
      </div>
      <div>
        number: <input value={numberValue} onChange={handleNewNumber} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default AddPeopleForm;
