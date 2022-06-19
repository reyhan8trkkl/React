import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import { v4 as uuidv4 } from "uuid";
import ContactList from "./ContactList";
import AddContact from "./AddContact";

export default function App() {
  const [contacts, setContacts] = useState([]);
  const LOCAL_STORAGE_KEY = "contacts";

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts,{ id: uuidv4(), ...contact} ]);
  };

  const removeContactHandler =(id)=>{
      const newContactList = contacts.filter((contact)=>{
        return contact.id!==id;
      })
      setContacts(newContactList)
  }

  useEffect(() => {
    const retrieveContacts = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY)
    );
    if (retrieveContacts) {
      setContacts(retrieveContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId={removeContactHandler} />
    </div>
  );
}
