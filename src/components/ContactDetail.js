import React from "react";
import user from "../images/user.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const ContactDetail = (props) => {
  const location = useLocation();
  console.log("in detail:", location);
  const { contact } = location.state || {};
  // const {id, name, email} = props.contact;
  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img src={user} alt="user" />
        </div>
        <div className="content">
          <div className="header">{contact?.name}</div>
          <div className="description">{contact?.email}</div>
        </div>
      </div>
      <div className="center-div">
        <Link to="/">
          <button className="ui button blue center">
            Back to Contact List
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ContactDetail;
