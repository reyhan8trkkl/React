import React from "react";
import userImage from "../images/user-contact.png" 

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div className="item">
        <img className="ui avatar image" src={userImage} alt="user" />
      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
      </div>
      <i
        onClick={()=>{props.clickHandler(id)}}
        className="trash alternate link icon"
        style={{ color: "red", marginTop: "7px", padding: "10px" }}
      ></i>
    </div>
  );
};

export default ContactCard;
