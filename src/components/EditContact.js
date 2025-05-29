import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const UpdateContact = ({ updateContactHandler }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const {
    id,
    name: initialName,
    email: initialEmail,
  } = location.state?.contact || {};

  const [name, setName] = useState(initialName || "");
  const [email, setEmail] = useState(initialEmail || "");

  const update = (e) => {
    e.preventDefault();
    if (name === "" || email === "") {
      alert("All fields are mandatory!!");
      return;
    }

    updateContactHandler({ id, name, email });
    setName("");
    setEmail("");
    navigate("/");
  };

  return (
    <div className="ui main" style={{ marginTop: "70px" }}>
      <h1 style={{ color: "black" }}>Edit Contact</h1>
      <form className="ui form" onSubmit={update}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="ui button blue">Update</button>
      </form>
    </div>
  );
};

export default UpdateContact;
