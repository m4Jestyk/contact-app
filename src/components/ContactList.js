import React from "react";
import ContactCard from "./ContactCard";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const ContactList = (props) => {
  console.log(props);

  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };

  const renderContactList = props.contacts.map((contact) => {
    return (
      <div>
        <ContactCard
          contact={contact}
          clickHandler={deleteContactHandler}
          key={contact.id}
        />
      </div>
    );
  });

  return (
    <div className="ui celled list">
      {renderContactList}
      <button className="ui button blue">
        <Link to="/add">New Contact</Link>
      </button>
    </div>
  );
};

export default ContactList;
