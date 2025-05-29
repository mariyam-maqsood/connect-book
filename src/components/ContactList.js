import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };
  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHandler={deleteContactHandler}
        key={contact.id}
      />
    );
  });
  return (
    <div className="main" style={{ marginTop: "70px" }}>
      <h2
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 0",
        }}
      >
        Contact List
        <Link to="/add">
          <button className="ui button blue right">Add Contact</button>
        </Link>
      </h2>

      <div className="ui search">
        <div className="ui icon input">
          <input type="text" placeholder="Search Contacts" className="prompt" />
          <i className="search icon"></i>
        </div>
      </div>
      <div className="ui celled list">{renderContactList}</div>
    </div>
  );
};

export default ContactList;
