import React from "react";
import Contact from "./Contact";

const Contacts = ({ contacts }) => {
  return (
    <ul>
      {contacts.map((contact) => (
        <Contact
          key={contact.name}
          name={contact.name}
          number={contact.number}
        />
      ))}
    </ul>
  );
};

export default Contacts;
