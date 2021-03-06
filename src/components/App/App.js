import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ConatctList/ContactList";
import Filter from "../Filter/Filter";
import Notification from "../Notification/Notification";

import "./App.css";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  addContact = (name, number) => {
    const { contacts } = this.state;

    const contactAlert = contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (contactAlert) {
      alert(`${name} is already exists!`);
      return;
    }

    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    this.setState((prevState) => {
      return {
        contacts: [...prevState.contacts, contact],
      };
    });
  };

  removeContact = (contactId) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId),
      };
    });
  };

  searchFilter = (filter) => {
    this.setState({ filter });
  };

  getContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { filter, contacts } = this.state;
    const findContact = this.getContacts();

    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.addContact} />

        <h2>Contacts</h2>
        {contacts.length > 0 ? (
          <Filter value={filter} onSearchFilter={this.searchFilter} />
        ) : (
          <Notification title={"Please add contact"} />
        )}

        <ContactList
          contacts={findContact}
          onRemoveContact={this.removeContact}
        />
      </>
    );
  }
}

export default App;
