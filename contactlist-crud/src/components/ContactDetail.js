import user from "../images/contactdetail.jpg";
import React from "react";
import { Link } from "react-router-dom";

const ContactDetail = (props) => {
  const { name, email } = props.location.state.contact;
  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img src={user} alt="user" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
          <div className="description">{email}</div>
        </div>
      </div>
      <div className="center-div">
        <Link to="/">
          <button className="ui vertical animated violet button">
            <div className="visible content">
              <i aria-hidden="true" className="left arrow white icon"></i>
            </div>
            <div className="hidden content">Back</div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ContactDetail;
