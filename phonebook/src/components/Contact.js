import React from "react";

const Contact = ({ name, number, deletePerson }) => {
  return (
    <li>
      {name} {number}
      <button onClick={deletePerson}>delete</button>
    </li>
  );
};

export default Contact;
