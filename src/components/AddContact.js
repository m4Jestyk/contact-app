import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";

class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
  };

  handleChangeName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleChangeEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  add = (event) => {
    event.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("All the fields are mandatory!");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "" });
    <Link to="/" />
  };

  render() {
    return (
      <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleChangeName}
            />
          </div>

          <div className="field">
            <label>E-mail</label>
            <input
              type="text"
              name="email"
              placeholder="E-mail"
              value={this.state.email}
              onChange={this.handleChangeEmail}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button className="ui button blue">Add Contact</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddContact;
