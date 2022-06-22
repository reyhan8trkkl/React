import React, { useRef } from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const inputEl = useRef("");
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
  const getSearchTerm = () => {
    props.searchKeyword(inputEl.current.value);
  };

  return (
    <div className="main">
      <div className="ui centered grid">
        <div className="ui equal width grid" style={{ marginTop: "35px" }}>
          <div className="row">
            <div className="column">
              <h2>Contact List</h2>
            </div>
            <div className="column">
              <Link to="/add">
                <button className="ui blue inverted button">Add Contact</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="ui centered two column row grid">
          <div className="column">
            <div className="row">
              <div className="ui search" style={{ marginTop: "15px" }}>
                <div className="ui fluid icon input">
                  <input
                    ref={inputEl}
                    type="text"
                    placeholder="Search..."
                    className="prompt"
                    value={props.term}
                    onChange={getSearchTerm}
                  />
                  <i aria-hidden="true" className="search icon"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ui centered two column row grid">
          <div className="column">
            <div className="row">
              <div className="ui celled list">
                {renderContactList.length > 0
                  ? renderContactList
                  : "No contacts available."}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactList;
