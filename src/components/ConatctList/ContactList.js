import React from "react";

import ContactListItem from "./ContactListItem";

import s from "./ContactList.module.css";

const ContactList = ({ contacts, onRemoveContact }) => {
  return (
    <ul className={s.list}>
      {contacts.map((contact) => {
        const { name, number, id } = contact;

        return (
          <ContactListItem
            key={id}
            name={name}
            number={number}
            onRemove={() => onRemoveContact(id)}
          />
        );
      })}
    </ul>
  );
};

export default ContactList;
