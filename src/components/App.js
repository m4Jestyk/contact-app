import React from "react";
import { v4 as uuid } from "uuid";
import "./App.css";
import Header from "./Header";
import ContactList from "./ContactList";
import AddContact from "./AddContact";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";

  const [contacts, setContacts] = React.useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  );

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  React.useEffect(() => {
    const retrieveContacts = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY)
    );
    console.log("Retrieved contacts:", retrieveContacts);
    if (retrieveContacts) setContacts(retrieveContacts);
  }, []);

  React.useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    console.log("Stored contacts:", contacts);
  }, [contacts]);

  return (
    <div className="ui container">
      <Router>
        <Header />
        <br />
        <br />
        <Routes>
          <Route
            path="/add"
            element={<AddContact addContactHandler={addContactHandler} />}
          />
          <Route
            path="/"
            element={
              <ContactList
                contacts={contacts}
                getContactId={removeContactHandler}
              />
            }
          />
        </Routes>

        {/* <AddContact addContactHandler = {addContactHandler}/>
      <ContactList contacts = {contacts} getContactId = {removeContactHandler}/> */}

        {/* ISME ROUTES ACCHE SE CONFIGURE KARNA HAI */}
      </Router>
    </div>
  );
}

export default App;
