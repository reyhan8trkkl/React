import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const deleteContactHandler = (id) => {
    props.getContactIdRemove(id);
  };

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        key={contact.id}
        contact={contact}
        clickHandler={deleteContactHandler}
      />
    );
  });

  return (
    <div className="main">
      <div class="ui grid">
        <div class="left floated five wide column">
          <h2>Contact List </h2>
        </div>
        <div class="right floated five wide column">
          <Link to="/add">
            <button className="ui blue inverted button">Add Contact</button>
          </Link>
        </div>
      </div>
      <div className="ui celled list">{renderContactList}</div>
    </div>
  );
};
export default ContactList;
