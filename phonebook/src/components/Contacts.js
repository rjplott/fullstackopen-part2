import React from "react";
import Contact from "./Contact";

const Contacts = ({ contacts, deleteHandler }) => {
  return (
    <ul>
      {contacts.map((contact) => (
        <Contact
          key={contact.name}
          name={contact.name}
          number={contact.number}
          deletePerson={() => deleteHandler(contact.id, contact.name)}
        />
      ))}
    </ul>
  );
};

export default Contacts;
