import React from "react";
import { Link } from "react-router-dom";
import userImage from "../images/user-contact.png";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div role="listitem" className="item">
    <div className="right floated content">
      <i
        onClick={() => {
          props.clickHandler(id);
        }}
        className="trash alternate link icon"
        style={{ color: "red", marginTop: "7px", padding: "10px" }}
      ></i>
    </div>
    <img className="ui avatar image" src={userImage} alt="user" />
    <div className="content">
      <Link
        to={{ pathname: `/contact/${id}`, state: { contact: props.contact } }}
      >
        <div className="header">{name}</div>
        <div>{email}</div>
      </Link>
    </div>
  </div>
  );
};

export default ContactCard;


