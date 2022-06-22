import React from "react";
import { Link } from "react-router-dom";
import userImage from "../images/user-contact.png";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div role="listitem" className="item">
      <div className="right floated content">
        <Link to={{ pathname: `/edit`, state: { contact: props.contact } }}>
          <i
            className="edit alternate link large icon"
            style={{ color: "gray", marginRight: "19px", marginTop: "6px" }}
          ></i>
        </Link>
        <i
          onClick={() => {
            props.clickHandler(id);
          }}
          className="trash alternate link large icon"
          style={{ color: "red", marginTop: "6px" }}
        ></i>
      </div>
      <img className="ui avatar image" src={userImage} alt="user" />
      <div className="content" style={{ marginLeft: "7px" }}>
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
