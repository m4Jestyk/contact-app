import React from "react";
import user from "../images/user.png"

const ContactCard = (props) => {
    const {id, name, email} = props.contact;

  return (
    <div>
      <div className="item" style={{display: "flex"}}>
        <img className="ui avatar image" src={user} alt="user"/>
        <div className="content" style={{marginLeft: "25px"}}>
          <div className="header">{name}</div>
          <div>{email}</div>
        </div>
        <i
          className="trash alternate outline icon"
          style={{ color: "red", marginTop: "7px", marginLeft: "auto"}}
          onClick = {() => props.clickHandler(id)}
        ></i>
      </div>
      <hr />
    </div>
  );
};

export default ContactCard;
